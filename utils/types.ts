import type * as CFRichTextTypes from '@contentful/rich-text-types';
import type { Asset, Entry, EntryFields } from 'contentful';

export interface TypeRecipeFields {
  title: EntryFields.Symbol;
  slug: EntryFields.Symbol;
  thumbnail: Asset;
  featuredImage: Asset;
  ingredients: EntryFields.Symbol[];
  cookingTime: EntryFields.Integer;
  method: CFRichTextTypes.Document;
}

export type TypeRecipe = Entry<TypeRecipeFields>;
