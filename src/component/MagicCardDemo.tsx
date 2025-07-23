"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MagicCard } from "@/components/magicui/magic-card";
import { useTheme } from "next-themes";
import { toast } from "sonner";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function MagicCardDemo() {
  const navigate = useNavigate();
  const { theme } = useTheme();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);

  // ✅ Redirect to dashboard if already logged in
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("adminLoggedIn");
    if (isLoggedIn === "true") {
      navigate("/admin-dashboard");
    }
  }, [navigate]);

  // ✅ Step 1: Email + Password Login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      if (res.data.success) {
        setIsOtpSent(true);
        toast.success("✅ Login verified");
        toast.info("🔐 OTP sent to your email");
      } else {
        toast.error("❌ Invalid credentials");
      }
    } catch (err) {
      toast.error("❌ Login request failed");
    }
  };

  // ✅ Step 2: OTP Verification
  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/verify-otp", {
        email,
        otp,
      });

      if (res.data.success) {
        toast.success("🎉 OTP Verified. Login Successful!");

        // Save login status
        localStorage.setItem("adminLoggedIn", "true");
        window.dispatchEvent(new Event("storage")); // trigger any listening component
        navigate("/admin-dashboard");

        // Optional: Clear fields
        setEmail("");
        setPassword("");
        setOtp("");
      } else {
        toast.error("❌ Invalid or expired OTP");
      }
    } catch (err) {
      toast.error("❌ OTP verification failed");
    }
  };

  return (
    <Card className="p-0 max-w-sm w-full shadow-none border-none">
      <MagicCard
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        className="p-0"
      >
        <CardHeader className="border-b border-border p-4 [.border-b]:pb-4">
          <CardTitle>{isOtpSent ? "Enter OTP" : "Admin Login"}</CardTitle>
          <CardDescription>
            {isOtpSent
              ? "OTP sent to your email. Enter the 6-digit code below."
              : "Enter your email and password to continue."}
          </CardDescription>
        </CardHeader>

        <CardContent className="p-4">
          {!isOtpSent ? (
            <form onSubmit={handleLogin}>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>
              <CardFooter className="p-0 mt-4">
                <Button type="submit" className="w-full hover:cursor-pointer hover:bg-[#D8D8D8] hover:text-black ">
                  Get OTP
                </Button>
              </CardFooter>
            </form>
          ) : (
            <form onSubmit={handleOtpSubmit}>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="otp">Enter OTP</Label>
                  <Input
                    id="otp"
                    type="text"
                    maxLength={6}
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter 6-digit OTP"
                    required
                  />
                </div>
              </div>
              <CardFooter className="p-0 mt-4">
                <Button type="submit" className="w-full hover:cursor-pointer hover:bg-[#D8D8D8] hover:text-black">
                  Verify OTP
                </Button>
              </CardFooter>
            </form>
          )}
        </CardContent>
      </MagicCard>
    </Card>
  );
}
