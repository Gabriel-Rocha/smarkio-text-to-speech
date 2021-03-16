const CommentsService = require('../services/commentsService');

class Comments {
    async index(req, res) {
        res.render("index");
    }

    async getAll(req, res) {
        try {
            const ret = await CommentsService.getAll();
            return res.status(200).json(ret)
        } catch (e) {
            return res.status(500).json(e)
        }
    }

    async store(req, res) {
        try {
            const textBody = req.body.text

            let comment = {
                text: textBody.trim()
            }

            const result = await CommentsService.store(comment);

            if(result.title_msg){
                return res.redirect("/comments") 
            }
            
            const { id, text } = result.dataValues

            if (id) await CommentsService.textAudio(text, id);

            res.redirect(200,"/comments");
        } catch (e) {
            return res.status(500).json(e);
        }
    }


}
module.exports = new Comments;

