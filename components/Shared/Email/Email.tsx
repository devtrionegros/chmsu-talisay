import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

interface VercelInviteUserEmailProps {
  username?: string;
  userImage?: string;
  invitedByUsername?: string;
  invitedByEmail?: string;
  teamName?: string;
  teamImage?: string;
  inviteLink?: string;
  inviteFromIp?: string;
  inviteFromLocation?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const Email = ({
  username = "zenorocha",
  userImage = `${baseUrl}/static/vercel-user.png`,
  invitedByUsername = "bukinoshita",
  invitedByEmail = "bukinoshita@example.com",
  teamName = "My Project",
  teamImage = `${baseUrl}/static/vercel-team.png`,
  inviteLink = "https://vercel.com/teams/invite/foo",
  inviteFromIp = "204.13.186.218",
  inviteFromLocation = "São Paulo, Brazil",
}: VercelInviteUserEmailProps) => {
  const previewText = `Join ${invitedByUsername} on Vercel`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
          <header className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between py-6">
              <h1 className="text-4xl font-bold text-gray-900">
                Your Company Name
              </h1>
              <div className="flex items-center">
                <a href="#" className="text-sm font-medium text-gray-500">
                  Contact Us
                </a>
              </div>
            </div>
          </header>

          <main className="max-w-7xl mx-auto">
            <div className="px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900">
                Welcome to Your Company
              </h2>
              <p className="mt-4 text-gray-500">Thank you for joining us!</p>

              <div className="mt-8">
                <p className="text-gray-500">
                  Heres what you can expect as a member:
                </p>

                <ul className="mt-4">
                  <li className="text-gray-700">
                    Exclusive access to our resources
                  </li>
                  <li className="text-gray-700">
                    Regular updates and insights
                  </li>
                  <li className="text-gray-700">
                    Special discounts and offers
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Get Started
                </a>
              </div>
            </div>
          </main>

          <footer className="max-w-7xl mx-auto mt-8">
            <div className="px-4 sm:px-6 lg:px-8">
              <p className="text-gray-500">
                Copyright &copy; 2023 Your Company Name. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </Tailwind>
    </Html>
  );
};

export default Email;
