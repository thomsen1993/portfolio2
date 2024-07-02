"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import supabase from "../lib/supabase";

interface AuthState {
  user: any;
  loading: boolean;
  error: string | null;
}

const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    loading: true,
    error: null,
  });

  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setAuthState({ user: session?.user ?? null, loading: false, error: null });
    };

    checkUser();

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN') {
        setAuthState({ user: session?.user ?? null, loading: false, error: null });
        router.push('/dashboard');
      } else if (event === 'SIGNED_OUT') {
        setAuthState({ user: null, loading: false, error: null });
        router.push('/login');
      }
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [router]);

  const login = async (email: string, password: string) => {
    setAuthState({ ...authState, loading: true });
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setAuthState({ user: null, loading: false, error: error.message });
    } else {
      const { data: { session } } = await supabase.auth.getSession();
      setAuthState({ user: session?.user ?? null, loading: false, error: null });
      router.push('/dashboard');
    }
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setAuthState({ user: null, loading: false, error: null });
    router.push('/login');
  };

  return { ...authState, login, logout };
};

export default useAuth;
