import { ClerkProvider } from '@clerk/clerk-react';

const clerkFrontendApi = process.env.pk_test_dmFsaWQtaW5zZWN0LTk2LmNsZXJrLmFjY291bnRzLmRldiQ;

export const ClerkWrapper = ({ children }) => {
  return (
    <ClerkProvider frontendApi={clerkFrontendApi}>
      {children}
    </ClerkProvider>
  );
};
