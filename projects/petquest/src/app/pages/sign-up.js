// pages/sign-up.js
import { SignUp } from '@clerk/clerk-react';

export default function SignUpPage() {
  return (
    <div className="container mx-auto p-4">
      <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
    </div>
  );
}
