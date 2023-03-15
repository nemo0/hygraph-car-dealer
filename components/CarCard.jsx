import styles from '@/styles/Car.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Car = ({ id, imageUrl, description, name, make, price, condition }) => {
  return (
    <div className={styles.container}>
      <Image
        src={imageUrl}
        alt={`${make} ${name}`}
        className={styles.image}
        width={200}
        height={200}
      />
      <div className={styles.description}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.make}>{make}</p>
        <p className={styles.details}>{description}</p>
        <p className={styles.price}>Price: {price}</p>
        <p className={styles.condition}>Condition: {condition}</p>
        <button className={styles.button}>
          <Link href={`/${id}`}>View Details</Link>
        </button>
      </div>
    </div>
  );
};

export default Car;
