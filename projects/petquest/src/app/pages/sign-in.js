// pages/sign-in.js
import { SignIn } from '@clerk/clerk-react';

export default function SignInPage() {
  return (
    <div className="container mx-auto p-4">
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
    </div>
  );
}
