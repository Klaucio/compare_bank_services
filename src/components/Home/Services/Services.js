import React from 'react';

import ServiceItem from './ServiceItem/ServiceItem';

import classes from './Services.module.css';

const Service = props => {

    const bankDesc= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ";
    const canalDesc= "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ";
    const serviceDesc= "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.";

    return (
        <div className={classes.Services}>
            <div>
                <ServiceItem icon="./assets/icons/bank.png" description={bankDesc} />
            </div>
            <div>
                <ServiceItem icon="./assets/icons/canal.png" description={canalDesc} />
            </div>
            <div>
                <ServiceItem icon="./assets/icons/services.png" description={serviceDesc}/>
            </div>

        </div>
    );
}

export default Service;