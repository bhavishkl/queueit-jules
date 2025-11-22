import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Users, Clock, MapPin, Smartphone, CheckCircle2, ArrowRight, Menu } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Clock className="h-6 w-6 text-primary" />
            <span>Queue-it</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#features" className="transition-colors hover:text-primary">Features</a>
            <a href="#use-cases" className="transition-colors hover:text-primary">Use Cases</a>
            <a href="#about" className="transition-colors hover:text-primary">About</a>
            <Button>Get Started</Button>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge className="w-fit" variant="secondary">New: Multi-language support</Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    The Universal Queuing Solution for Everyone
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    From auto drivers at CNG pumps to devotees at temples. Queue-it is the single app that handles all your queuing needs, saving you time and hassle.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-2">
                    Download App <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last">
                 {/* Placeholder for Hero Image - Using a gradient div for now */}
                 <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center rounded-xl border shadow-sm">
                    <div className="text-center space-y-2">
                        <Clock className="h-24 w-24 mx-auto text-primary opacity-80" />
                        <p className="text-lg font-medium text-muted-foreground">Queue-it App Interface</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section id="use-cases" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Real World Solutions</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  One App, Infinite Possibilities
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform is designed to be flexible enough for any queuing scenario. Here is how our customers are using Queue-it.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>CNG Pumps</CardTitle>
                  <CardDescription>For Auto Drivers & Fleet Owners</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    No more long waiting lines. Book your slot at the nearest CNG pump and get notified when it is your turn. Save fuel and time.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Barber Shops</CardTitle>
                  <CardDescription>For Customers & Stylists</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Walk in only when your chair is ready. Check live wait times and join the queue remotely. Perfect for busy weekends.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Temples</CardTitle>
                  <CardDescription>For Devotees</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Manage massive crowds with ease. Virtual queuing for darshan allows devotees to wait comfortably instead of standing in long lines.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Everything you need to manage queues efficiently
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Queue-it is packed with features to make queuing seamless for both businesses and customers.
                </p>
                <ul className="grid gap-4 py-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Real-time status updates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Remote joining</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Estimated wait times</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Multiple queues management</span>
                  </li>
                </ul>
              </div>
              <div className="relative overflow-hidden rounded-xl border bg-background shadow-xl">
                <div className="flex flex-col gap-4 p-8">
                    <div className="flex items-center justify-between">
                        <span className="font-semibold">Current Status</span>
                        <Badge variant="outline" className="text-green-600 border-green-600">Live</Badge>
                    </div>
                    <div className="space-y-4">
                         <div className="flex items-center gap-4 rounded-lg border p-4">
                             <div className="bg-primary/10 p-2 rounded-full"><Users className="h-4 w-4 text-primary" /></div>
                             <div className="flex-1">
                                 <p className="font-medium">Your Position</p>
                                 <p className="text-sm text-muted-foreground">5th in line</p>
                             </div>
                             <div className="font-bold text-xl">#105</div>
                         </div>
                         <div className="flex items-center gap-4 rounded-lg border p-4">
                             <div className="bg-primary/10 p-2 rounded-full"><Clock className="h-4 w-4 text-primary" /></div>
                             <div className="flex-1">
                                 <p className="font-medium">Est. Wait Time</p>
                                 <p className="text-sm text-muted-foreground">Updated 1 min ago</p>
                             </div>
                             <div className="font-bold text-xl">15 min</div>
                         </div>
                    </div>
                    <Button className="w-full mt-4">Leave Queue</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About/CTA Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  About Queue-it
                </h2>
                <p className="max-w-[900px] text-primary-foreground/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We are a startup dedicated to giving people their time back. Our mission is to eliminate physical lines across all industries, creating a smoother, more efficient world for everyone.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1 bg-primary-foreground text-primary placeholder:text-primary/70"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button className="bg-background text-foreground hover:bg-background/90" type="submit">
                    Join Waitlist
                  </Button>
                </form>
                <p className="text-xs text-primary-foreground/70">
                  Sign up to get notified when we launch in your city.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2024 Queue-it Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  );
}
