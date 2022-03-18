import { useState } from 'react';
import styles from './App.module.css';
import poweredImage from './assets/powered.png';
import {levels, calculateBmi} from './helpers/bmi';
import { GridItem } from './components/GridItem/GridItem';

const App = () => {
  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const calculateBMI = () => {
    if(height && weight){
      // calculateBmi 
    }else{
      alert("All fields are mandatories!");
    }
  }
  return (
    <div className={styles.main}>
      <header className={styles.headerContainer}>
        <img src={poweredImage} alt="" width={150} /> 
      </header>
      <div className={styles.container}>
        <div className={styles.left}>
          <h1>calculate your BMI</h1>
          <p>Body mass index (BMI) is a measure of body fat based on height and weight that applies to adult men and women. View the BMI tables or use the tool below to compute yours.</p>

          <label>Height</label>
          <input
            type="number"
            placeholder="Enter your height"
            value={height > 0 ? height : ""}
            onChange={e => setHeight(parseFloat(e.target.value))}

          />

          <label>Weight</label>
          <input
            type="number"
            placeholder="Enter your weight"
            value={weight > 0 ? weight : ""}
            onChange={e => setWeight(parseFloat(e.target.value))}

          />

          <button onClick={calculateBMI}>Calculate</button>
        </div>
        <div className={styles.right}>
          <div className={styles.grid}>
          {levels.map((item, key) => (
            <div key={key}>
              <GridItem>

              </GridItem>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;