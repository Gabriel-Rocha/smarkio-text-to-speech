const Database = require('../models/index')

const TextSpeechService = require('../services/TextSpeechService');

class CommentsSevices {

    constructor() {
        this.CommentsDb = Database["Comments"];
        this.textSpeechService = new TextSpeechService()
    }

    async getAll() {
        try {
            return await this.CommentsDb.findAll();
        } catch (e) {
            return undefined
        }
    }

    async getByid(id) {
        try {
            return await this.CommentsDb.findByPk(id)
        } catch (e) {
            return undefined
        }
    }

    async store(comment) {

        let errors = {};
        const {text} = comment

        let valid = this.validate(text, errors);
        
        if (valid) {
            try {
                const result = await this.CommentsDb.create(comment);
                return result;
            } catch (e) {
                errors.system_msg = "Não foi possivel salvar o texto"
                return errors;
            }
        } else {
            return errors;
        }
    }

    validate(text, errors) {

        let erroCount = 0;
        if (!text) {
            errors.title_msg = "Campo vazio";
            erroCount++;
        }

        if (erroCount == 0) {
            return true;
        } else {
            return false;
        }
    }


    async textAudio(comment, id) {
        try {
            const audio = `audio_${id}`;
            await this.textSpeechService.create(comment, audio);
        } catch (e) {
            console.log('Tente novamente.')
        }
    }
}

module.exports = new CommentsSevices;

