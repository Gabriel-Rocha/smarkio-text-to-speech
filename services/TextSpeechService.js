const path = require('path');
const fs = require('fs');

const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');

const { IamAuthenticator } = require('ibm-watson/auth');

require('dotenv').config();

class TextSpeechService {

    constructor() {

        const apikey = process.env.IBM_APIKEY
        const url = process.env.IBM_URL

        this.textToSpeech = new TextToSpeechV1({
            authenticator: new IamAuthenticator({ apikey: apikey }),
            url: url
        });

    }


    async create(text, fileName) {

        return this.textToSpeech
            .synthesize({
                text: text,
                voice: 'pt-BR_IsabelaV3Voice',
                accept: 'audio/wav'
            })
            .then(({ result }) => this.textToSpeech.repairWavHeaderStream(result))
            .then(repairedFile => {
                const filePath = path.resolve(__dirname, `../public/audio/${fileName}.wav`);

                fs.writeFileSync(filePath, repairedFile);

                console.log('audio.wav written with a corrected wav header');
            })
            .catch(err => {
                console.log(err);
            });



    }



}

module.exports = TextSpeechService;


