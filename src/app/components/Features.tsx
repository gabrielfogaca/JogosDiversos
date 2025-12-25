import { Zap, Shield, Palette, Code2, Rocket, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized performance for the best user experience with minimal load times.',
  },
  {
    icon: Shield,
    title: 'Secure by Default',
    description: 'Built with security best practices to keep your data safe and protected.',
  },
  {
    icon: Palette,
    title: 'Beautiful Design',
    description: 'Stunning UI components that look great on any device or screen size.',
  },
  {
    icon: Code2,
    title: 'Developer Friendly',
    description: 'Clean, maintainable code with excellent documentation and examples.',
  },
  {
    icon: Rocket,
    title: 'Easy Deployment',
    description: 'Deploy anywhere with simple build process and optimized output.',
  },
  {
    icon: Users,
    title: 'Great Community',
    description: 'Join thousands of developers building amazing applications together.',
  },
];

export function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl mb-4">
            Everything you need to succeed
          </h2>
          <p className="text-xl text-slate-600">
            Powerful features that help you build better applications faster
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <div className="size-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4">
                  <feature.icon className="size-6 text-white" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
