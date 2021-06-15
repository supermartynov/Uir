const genericCrud = (model) => ({
    async get({ params: {id} }, res) {
        try {
            const item = await model.findByPk(id)
            return res.status(200).send(item)
        } catch (err) {
            return res.status(400).send(err)
        }
    },

    async getAll(req, res) {
        try {
            const items = await model.findAll()
            return res.status(200).send(items)
        } catch (err) {
            return res.status(400).send(err)
        }
    },

    async getAllVacancies({ params: {id} }, res){
        try {
            const item = await model.findAll({
                where: {
                    "specialtyId" : id
                }
            })
            return res.status(200).send(item)
        } catch (err) {
            return res.status(400).send(err)
        }
    } //only for vacancies

})

export {genericCrud}