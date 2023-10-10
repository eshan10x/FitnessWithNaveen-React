import React from 'react';
import '../css/Trainings.css';
import training from '../img/mainpage2.png'
import DescriptionItems from './DescriptionItems';
import weight from '../img/weight.png'
import general from '../img/general.png'
import functional from '../img/functional.png'

function Trainings() {

    return (
        <div className="row">
            <div className="col-2 col1">
                <img src={training} alt="traningCover" id='traiimg'></img>
            </div>
            <div className="col-2 col2">
                <div className="col2box">
                <DescriptionItems 
                    image={weight}
                    title="PERSONAL TRAINING"
                    paragraph="Our personal training programmes conducted by our professional personal trainer offer customized sessions especially tailor-made to suit your requirements. Since these personal training sessions are focused around your individual fitness we ensure that you get the most out of every workout session."
                />
                <DescriptionItems
                    image={general}
                    title="CARDIO TRAINING"
                    paragraph="We offers you some of the best and most intensive Cardio Training in Sri Lanka. Cardio Training increases energy levels while reducing stress. It strengthens your heart and lungs, lowers blood pressure and cholesterol levels while helping you enjoy a fit and healthy life."
                />
                <DescriptionItems
                    image={functional}
                    title="STRENGTH TRAINING"
                    paragraph="Strength Training helps shape your body while burning fat. improving your muscle and bone strength is no longer a hassle. And what’s more, our experienced trainer will advise you on how you can improve your overall levels of fitness and health."
                />
                <DescriptionItems
                    image={functional}
                    title="ABS TRAINING"
                    paragraph="Almost everybody wants a six-pack – rock hard abs that will make you the talk of the town and the gym. Here at we will help you achieve best results for your efforts through systematic workouts targeting the four key muscle groups you need to tone to get a taut tummy."
                />
                
                <div className="link">
                    <p>Learn more about our facility!</p>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default Trainings
