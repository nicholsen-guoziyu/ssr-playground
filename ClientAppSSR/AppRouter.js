import Hello from "./Hello";
import World from "./World";

function AppRouter() {
    return (
      <Switch>
        <Route path="/hello" component={Hello} />
        <Route path="/world" component={World} />
        <Route component={NotFound} />
      </Switch>
    );
  }