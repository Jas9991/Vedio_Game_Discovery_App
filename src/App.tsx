import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`, //1024
        }}
      >
        <GridItem area="nav" bg={"coral"}>
          nav
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" bg={"yellow"}>
            aside
          </GridItem>
        </Show>
        <GridItem area="main" bg={"dodgerblue"}>
          main
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
