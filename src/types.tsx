type TNamedLink = {
  name: string;
  url: string;
};

type TAbility = {
  ability: TNamedLink[];
  is_hidden: boolean;
  slot: number;
};

type TGameIndex = {
  game_index: string;
  version: TNamedLink;
};

type TVersionGroupDetail = {
  level_learned_at: number;
  move_learn_method: TNamedLink;
  order?: string;
  version_group: TNamedLink;
};

type TMove = {
  move: TNamedLink;
  version_group_details: TVersionGroupDetail[];
};

type TStatItem = {
  base_stat: number;
  effort: number;
  stat: TNamedLink;
};

type TStat = { generation: TNamedLink; stats: TStatItem[] };

type TType = {
  slot: number;
  type: TNamedLink;
};

type Nullable<T> = T | null;

type BaseSprites = {
  back_default?: string;
  back_female?: Nullable<string>;
  back_shiny?: string;
  back_shiny_female?: Nullable<string>;

  front_default?: Nullable<string>;
  front_female?: Nullable<string>;
  front_shiny?: Nullable<string>;
  front_shiny_female?: Nullable<string>;
};

type Gen2Crystal = BaseSprites & {
  back_shiny_transparent: string;
  back_transparent: string;
  front_shiny_transparent: string;
  front_transparent: string;
};

type Gen2Simple = BaseSprites & {
  front_transparent: string;
};
type Gen3Emerald = {
  front_default: string;
  front_shiny: string;
};

type Gen3Game = BaseSprites;

type Gen4Game = BaseSprites;

type Gen5Animated = BaseSprites;

type Gen5 = BaseSprites & {
  animated: Gen5Animated;
};
type Gen6Game = BaseSprites;

type Gen7Icons = {
  front_default: string;
  front_female: Nullable<string>;
};

type Gen7Game = BaseSprites;
type Gen8Icons = Gen7Icons;

type Gen8Game = {
  front_default: string;
  front_female: Nullable<string>;
};
type Gen9Game = {
  front_default: Nullable<string>;
  front_female: Nullable<string>;
};

export type TPokemon = {
  abilities: TAbility[];
  base_experience: number;
  cries: { latest: string; legacy: string };
  forms: TNamedLink[];
  game_indices: TGameIndex[];
  height: number;
  held_items: [];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: TMove[];
  name: string;
  order: number;
  past_abilities: {
    abilities: TAbility[];
    generation: TNamedLink;
  };
  past_stats: TStat[];
  past_types: [];
  species: TNamedLink;
  sprites: {
    back_default: string;
    back_female?: string;
    back_shiny: string;
    back_shiny_female?: string;
    front_default: string;
    front_female?: string;
    front_shiny: string;
    front_shiny_female?: string;
    other: {
      dream_world: { front_default: string; front_female?: string };
      home: {
        front_default: string;
        front_female?: string;
        front_shiny: string;
        front_shiny_female?: string;
      };
      'official-artwork': { front_default: string; front_shiny: string };
      showdown: {
        back_default: string;
        back_female?: string;
        back_shiny: string;
        back_shiny_female?: string;
        front_default: string;
        front_female?: string;
        front_shiny: string;
        front_shiny_female?: string;
      };
    };
    versions: {
      'generation-i': {
        'red-blue': {
          back_default: string;
          back_gray: string;
          back_transparent: string;
          front_default: string;
          front_gray: string;
          front_transparent: string;
        };
        yellow: {
          back_default: string;
          back_gray: string;
          back_transparent: string;
          front_default: string;
          front_gray: string;
          front_transparent: string;
        };
      };

      'generation-ii': {
        crystal: Gen2Crystal;
        gold: Gen2Simple;
        silver: Gen2Simple;
      };

      'generation-iii': {
        emerald: Gen3Emerald;
        'firered-leafgreen': Gen3Game;
        'ruby-sapphire': Gen3Game;
      };

      'generation-iv': {
        'diamond-pearl': Gen4Game;
        'heartgold-soulsilver': Gen4Game;
        platinum: Gen4Game;
      };

      'generation-v': {
        'black-white': Gen5;
      };

      'generation-vi': {
        'omegaruby-alphasapphire': Gen6Game;
        'x-y': Gen6Game;
      };

      'generation-vii': {
        icons: Gen7Icons;
        'ultra-sun-ultra-moon': Gen7Game;
      };

      'generation-viii': {
        icons: Gen8Icons;
        'brilliant-diamond-shining-pearl': Gen8Game;
      };

      'generation-ix': {
        'scarlet-violet': Gen9Game;
      };
    };
  };
  stats: TStatItem[];
  types: TType[];
  weight: number;
};

type TflavorTextEntry = {
  flavor_text: string;
  language: TNamedLink;
  version: TNamedLink;
};

type TGeneraItem = {
  genus: string;
  language: TNamedLink;
};

type TNameItem = {
  language: TNamedLink;
  name: string;
};

type TPalParkEncounterItem = {
  area: TNamedLink;
  base_score: number;
  rate: number;
};

type TPokedexNumber = {
  entry_number: number;
  pokedex: TNamedLink;
};

type TVariety = {
  is_default: boolean;
  pokemon: TNamedLink;
};

export type TSpecies = {
  base_happiness: number;
  capture_rate: number;
  color: TNamedLink;
  egg_groups: TNamedLink[];
  evolution_chain: { url: string };
  evolves_from_species: TNamedLink;
  flavor_text_entries: TflavorTextEntry[];
  form_descriptions: [];
  forms_switchable: boolean;
  gender_rate: number;
  genera: TGeneraItem[];
  generation: TNamedLink;
  growth_rate: TNamedLink;
  habitat: TNamedLink;
  has_gender_differences: boolean;
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  names: TNameItem[];
  order: number;
  pal_park_encounters: TPalParkEncounterItem[];
  pokedex_numbers: TPokedexNumber[];
  shape: TNamedLink;
  varieties: TVariety[];
};
