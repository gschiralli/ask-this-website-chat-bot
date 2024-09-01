"use client";

import React, { useState } from "react";
import { Button, Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const LandingPage = () => {
  const [url, setUrl] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url) {
      router.push(`/${encodeURIComponent(url)}`);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-900 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-white mb-6">Ask This Website</h1>
      <p className="text-xl text-zinc-300 mb-8 text-center max-w-2xl">
        Engage in intelligent conversations about any website. Just enter a URL
        below and start chatting!
      </p>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="flex flex-col sm:flex-row gap-4">
          <Input
            type="url"
            placeholder="Enter a website URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-grow"
          />
          <Button type="submit" color="primary" className="px-10">
            Start Chatting
          </Button>
        </div>
      </form>
      <div className="mt-12 text-zinc-400">
        <h2 className="text-2xl font-semibold mb-4">How it works:</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Enter the URL of any website you want to chat about.</li>
          <li>Our AI analyzes the content of the website.</li>
          <li>Ask questions or discuss topics related to the website.</li>
          <li>Get intelligent, context-aware responses from our chatbot.</li>
        </ol>
      </div>
    </div>
  );
};

export default LandingPage;
