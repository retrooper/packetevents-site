import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Cards() {
  return (
    <>
      <div className="flex justify-center space-x-5 pt-5">
        <Card className="w-72 h-36 bg-[rgba(4,11,30,1)]	 border-0 hover:bg-slate-950 hover:drop-shadow-[0__1px__1px_rgba(100,120,255,0.7)] drop-shadow-[0_35px_35px_rgba(250,250,250,0.001)]">
          <CardHeader>
            <CardTitle>Free & Open Source</CardTitle>
            <CardDescription>Respects your freedom</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Transparent development</p>
          </CardContent>
          <CardFooter>
            <p></p>
          </CardFooter>
        </Card>
        <Card className="w-72 h-36 bg-[rgba(4,11,30,1)]	 border-0 hover:bg-slate-950 hover:drop-shadow-[0__1px__1px_rgba(100,120,255,0.7)] drop-shadow-[0_35px_35px_rgba(250,250,250,0.001)]">
          <CardHeader>
            <CardTitle>Active Community</CardTitle>
            <CardDescription>Collaborative user base</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Active knowledge exchange</p>
          </CardContent>
          <CardFooter>
            <p></p>
          </CardFooter>
        </Card>
        <Card className="w-72 h-36 bg-[rgba(4,11,30,1)]	 border-0 hover:bg-slate-950 hover:drop-shadow-[0__1px__1px_rgba(100,120,255,0.7)] drop-shadow-[0_35px_35px_rgba(250,250,250,0.001)]">
          <CardHeader>
            <CardTitle>Rich Features</CardTitle>
            <CardDescription>Focus on Convenience</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Intuitive integration</p>
          </CardContent>
          <CardFooter>
            <p></p>
          </CardFooter>
        </Card>
      </div>
      <div className="flex justify-center space-x-5 pt-5">
        <Card className="w-72 h-36 bg-[rgba(4,11,30,1)]	 border-0 hover:bg-slate-950 hover:drop-shadow-[0__1px__1px_rgba(100,120,255,0.7)] drop-shadow-[0_35px_35px_rgba(250,250,250,0.001)]">
          <CardHeader>
            <CardTitle>Portable</CardTitle>
            <CardDescription>Write once, Run Anywhere</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Support for various platforms</p>
          </CardContent>
          <CardFooter>
            <p></p>
          </CardFooter>
        </Card>
        <Card className="w-72 h-36 bg-[rgba(4,11,30,1)]	 border-0 hover:bg-slate-950 hover:drop-shadow-[0__1px__1px_rgba(100,120,255,0.7)] drop-shadow-[0_35px_35px_rgba(250,250,250,0.001)]">
          <CardHeader>
            <CardTitle>Ubiquitous</CardTitle>
            <CardDescription>Powering over 90,000 players</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Running on over 20,000 servers</p>
          </CardContent>
          <CardFooter>
            <p></p>
          </CardFooter>
        </Card>
        <Card className="w-72 h-36 bg-[rgba(4,11,30,1)]	 border-0 hover:bg-slate-950 hover:drop-shadow-[0__1px__1px_rgba(100,120,255,0.7)] drop-shadow-[0_35px_35px_rgba(250,250,250,0.001)]">
          <CardHeader>
            <CardTitle>Innovative</CardTitle>
            <CardDescription>Modern Approach</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Different approach</p>
          </CardContent>
          <CardFooter>
            <p></p>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
