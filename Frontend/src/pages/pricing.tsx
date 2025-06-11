import { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
   
  Chip,
  Switch,
  Avatar,
  Badge
} from "@heroui/react";
import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

// SVG Icons
const CheckIcon = (props) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
  </svg>
);

const XIcon = (props) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const pricingPlans = [
  {
    name: "Starter",
    price: "Free",
    duration: "forever",
    description: "Essential security for individuals",
    features: [
      "5 secure items",
      "Basic encryption",
      "1 device sync",
      "100MB storage",
      "Email support"
    ],
    color: "bg-purple-500/10 dark:bg-purple-400/10",
    popular: false
  },
  {
    name: "Pro",
    price: "$9",
    duration: "per month",
    description: "For power users and professionals",
    features: [
      "Unlimited items",
      "Advanced encryption",
      "5 device sync",
      "10GB storage",
      "Priority support",
      "Secure sharing",
      "Biometric unlock"
    ],
    color: "bg-blue-500/10 dark:bg-blue-400/10",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    duration: "",
    description: "For teams and organizations",
    features: [
      "Everything in Pro",
      "Unlimited storage",
      "Team management",
      "SSO integration",
      "Audit logs",
      "24/7 support",
      "Dedicated account manager"
    ],
    color: "bg-green-500/10 dark:bg-green-400/10",
    popular: false
  }
];

const featureComparison = [
  {
    name: "Secure Items",
    starter: "5 max",
    pro: "Unlimited",
    enterprise: "Unlimited"
  },
  {
    name: "Encryption",
    starter: "AES-128",
    pro: "AES-256",
    enterprise: "AES-256 + FIPS"
  },
  {
    name: "Device Sync",
    starter: "1 device",
    pro: "5 devices",
    enterprise: "Unlimited"
  },
  {
    name: "Storage",
    starter: "100MB",
    pro: "10GB",
    enterprise: "Custom"
  },
  {
    name: "Support",
    starter: "Email",
    pro: "Priority",
    enterprise: "24/7"
  },
  {
    name: "Team Features",
    starter: false,
    pro: false,
    enterprise: true
  }
];

export default function PricingPage() {
  const [annualBilling, setAnnualBilling] = useState(false);

  return (
    <DefaultLayout> 
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <div className="mb-4 inline-block bg-violet-800/20 text-violet-400 px-4 py-2 rounded-full font-medium">
          Simple Pricing
        </div>
        <h1 className={title({ size: "lg" })}>
          Choose Your <span className={title({ color: "violet", size: "lg" })}>Security Plan</span>
        </h1>
        <h2 className={subtitle({ class: "mt-4 max-w-2xl mx-auto" })}>
          Military-grade encryption at every tier. Pay as you grow.
        </h2>
        
        <div className="mt-8 flex items-center justify-center gap-4">
          <span className="text-default-500">Monthly</span>
          <Switch 
            isSelected={annualBilling}
            onChange={() => setAnnualBilling(!annualBilling)}
            color="secondary"
          />
          <span className="font-medium">
            Annual <Chip color="success" variant="flat" size="sm">Save 20%</Chip>
          </span>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {pricingPlans.map((plan, index) => (
          <Card 
            key={index}
            className={`${plan.color} hover:shadow-lg transition-all duration-300 h-full relative`}
            isHoverable
          >
            {plan.popular && (
              <Badge 
                color="primary" 
                variant="solid" 
                className="absolute -top-3 right-4 z-10"
              >
                Most Popular
              </Badge>
            )}
            <CardHeader className="pb-0">
              <h3 className="text-2xl font-bold dark:text-white">{plan.name}</h3>
              <div className="flex items-end gap-1 mt-2">
                <span className="text-4xl font-bold dark:text-white">
                  {annualBilling && plan.price !== "Free" && plan.price !== "Custom" 
                    ? `$${Math.floor(parseInt(plan.price.replace('$', '')) * 0.8 * 12)}`
                    : plan.price}
                </span>
                {plan.price !== "Free" && plan.price !== "Custom" && (
                  <span className="text-default-500 dark:text-default-300 mb-1">
                    /{annualBilling ? "year" : "mo"}
                  </span>
                )}
              </div>
              <p className="text-default-500 dark:text-default-300 mt-1">{plan.description}</p>
            </CardHeader>
            <CardBody>
              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 dark:text-default-300">
                    <CheckIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardBody>
            <CardFooter>
              <Button
                color={plan.popular ? "primary" : "default"}
                variant={plan.popular ? "solid" : "flat"}
                size="lg"
                radius="full"
                className="w-full"
              >
                {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </section>

      {/* Feature Comparison */}
      <section className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2 dark:text-white">
            Plan <span className="text-purple-600 dark:text-purple-400">Comparison</span>
          </h2>
          <p className="text-default-500 dark:text-default-300 max-w-2xl mx-auto">
            See how our plans stack up against each other
          </p>
        </div>

        <div className="bg-white dark:bg-default-900 rounded-xl shadow-sm overflow-hidden border border-default-200 dark:border-default-700">
          <table className="w-full">
            <thead>
              <tr className="border-b border-default-200 dark:border-default-700 bg-default-100 dark:bg-default-800">
                <th className="text-left py-4 px-6 font-semibold text-default-900 dark:text-white">Feature</th>
                <th className="text-center py-4 px-6 font-semibold text-default-900 dark:text-white">Starter</th>
                <th className="text-center py-4 px-6 font-semibold text-default-900 dark:text-white">Pro</th>
                <th className="text-center py-4 px-6 font-semibold text-default-900 dark:text-white">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {featureComparison.map((feature, index) => (
                <tr 
                  key={index} 
                  className={`border-b border-default-200 dark:border-default-700 ${
                    index % 2 === 0 ? "bg-default-50/50 dark:bg-default-800/20" : ""
                  }`}
                >
                  <td className="py-4 px-6 font-medium dark:text-default-300">{feature.name}</td>
                  <td className="text-center py-4 px-6 dark:text-default-300">
                    {typeof feature.starter === 'boolean' ? (
                      feature.starter ? (
                        <CheckIcon className="w-5 h-5 text-green-500 inline" />
                      ) : (
                        <XIcon className="w-5 h-5 text-red-500 inline" />
                      )
                    ) : (
                      feature.starter
                    )}
                  </td>
                  <td className="text-center py-4 px-6 dark:text-default-300">
                    {typeof feature.pro === 'boolean' ? (
                      feature.pro ? (
                        <CheckIcon className="w-5 h-5 text-green-500 inline" />
                      ) : (
                        <XIcon className="w-5 h-5 text-red-500 inline" />
                      )
                    ) : (
                      feature.pro
                    )}
                  </td>
                  <td className="text-center py-4 px-6 dark:text-default-300">
                    {typeof feature.enterprise === 'boolean' ? (
                      feature.enterprise ? (
                        <CheckIcon className="w-5 h-5 text-green-500 inline" />
                      ) : (
                        <XIcon className="w-5 h-5 text-red-500 inline" />
                      )
                    ) : (
                      feature.enterprise
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ Section */}
      <section>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2 dark:text-white">
            Frequently Asked <span className="text-purple-600 dark:text-purple-400">Questions</span>
          </h2>
          <p className="text-default-500 dark:text-default-300 max-w-2xl mx-auto">
            Common questions about our pricing and plans
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              question: "Can I switch plans later?",
              answer: "Yes, you can upgrade or downgrade at any time. Your billing will be prorated accordingly."
            },
            {
              question: "Is there a free trial?",
              answer: "The Starter plan is free forever. For Pro, we offer a 14-day free trial with all features."
            },
            {
              question: "What payment methods do you accept?",
              answer: "We accept all major credit cards, PayPal, and for Enterprise plans, we can do bank transfers."
            },
            {
              question: "How secure is my data?",
              answer: "All plans use military-grade encryption. We never store or access your unencrypted data."
            }
          ].map((faq, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow dark:bg-default-900">
              <CardBody>
                <h3 className="font-semibold text-lg mb-2 dark:text-white">{faq.question}</h3>
                <p className="text-default-500 dark:text-default-300">{faq.answer}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-16 text-center">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-700 dark:to-blue-700 text-white rounded-2xl p-8">
          <Avatar
            isBordered
            color="secondary"
            size="lg"
            className="mx-auto mb-4"
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            }
          />
          <h2 className="text-2xl font-bold mb-2">Still have questions?</h2>
          <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
            Our security experts are ready to help you choose the perfect plan for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button color="secondary" size="lg" radius="full" variant="shadow">
              Contact Support
            </Button>
            <Button color="default" size="lg" radius="full" variant="ghost" className="text-white">
              Enterprise Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
    </DefaultLayout>
  );
}