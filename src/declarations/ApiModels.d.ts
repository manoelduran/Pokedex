interface Pokemon {
  id: number;
  height: number;
  name: string;
  weight: number;
  sprites: {
    front_default: string;
  };
  types: [
    {
      type: {
        name: string;
      };
    }
  ];
}
