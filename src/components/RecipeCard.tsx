import styles from '@/styles/RecipeCard.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { TypeRecipe } from 'utils/types';

type Props = {
  recipe: TypeRecipe;
};

function RecipeCard({ recipe }: Props) {
  const { title, slug, cookingTime, thumbnail } = recipe.fields;

  return (
    <div className={styles.card}>
      <div className={styles.featured}>
        <Image
          src={`https:${thumbnail.fields.file.url}`}
          width={thumbnail.fields.file.details.image?.width}
          height={thumbnail.fields.file.details.image?.height}
          alt={title}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.info}>
          <h4>{title}</h4>
          <p>Takes approx {cookingTime} mins to make</p>
        </div>
        <div className={styles.actions}>
          <Link href={`/recipes/${slug}`}>Cook this</Link>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
