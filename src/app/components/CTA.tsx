import { Button } from './ui/button';
import { Input } from './ui/input';

export function CTA() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl mb-4">
            Ready to get started?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Join thousands of developers building amazing things. Start your journey today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1"
            />
            <Button size="lg">
              Subscribe
            </Button>
          </div>
          
          <p className="text-sm text-slate-500 mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
