import { ApolloExplorer } from '@apollo/explorer';
  ... 
  new ApolloExplorer({
    target: '#embedded-explorer',
    graphRef: 'star-wars-swapi@current',
    persistExplorerState: false,
    initialState: {
      document: `query ExampleQuery {
  allPeople {
    people {
      name
      birthYear
      eyeColor
      gender
      hairColor
      homeworld {
        gravity
        name
      }
      skinColor
      species {
        created
        designation
        eyeColors
      }
      vehicleConnection {
        vehicles {
          cargoCapacity
          model
          name
          passengers
        }
      }
    }
  }
}`,
      variables: {},
      headers: {},
      displayOptions: {
        showHeadersAndEnvVars: true, 
        docsPanelState: 'open', 
        theme: 'light',
      },
    },
  });
  ...
  <div id="embedded-explorer"/>