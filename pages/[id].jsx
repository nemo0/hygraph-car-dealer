import styles from '@/styles/CarDetails.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useQuery, gql } from '@apollo/client';
const CarDetails = () => {
  const router = useRouter();

  const { id } = router.query;

  const query = gql`
    query carDetail_carInfo($id: ID!) {
      values: carDetail(where: { id: $id }) {
        nameOfTheCar
        description
        gallery {
          url
        }
        carInfo
      }
    }
  `;
  const { loading, error, data } = useQuery(query, { variables: { id } });

  const { values } = loading ? { values: {} } : data;

  return (
    <div className={styles.container}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div className={styles.imageContainer}>
            <Image
              src={values.gallery[0].url}
              alt={`${values.carInfo.make.name} ${values.carInfo.model.name}`}
              className={styles.image}
              height={400}
              width={400}
            />
          </div>
          <div className={styles.detailsContainer}>
            <h1
              className={styles.name}
            >{`${values.carInfo.make.name} ${values.carInfo.model.name}`}</h1>
            <p className={styles.doors}>
              Number of Doors: {values.carInfo.numOfDoors}
            </p>
            <p className={styles.model}>Make: {values.carInfo.model.name}</p>
            <p className={styles.model}>
              Engine Compressor Type: {values.carInfo.engine.compressorType}
            </p>
            <div className={styles.description}>
              <h2>Description</h2>
              <p>{values.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarDetails;
