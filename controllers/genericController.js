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

    async create({ body }, res) {
        try {
            const item = await model.create(body)
            return req.status(200).send(item)
        } catch (err) {
            return res.status(400).send(err)
        }
    },

    async getNames(req, res) {
        try {
            const item = await model.findAll({
                attributes: ['id', 'name'],
            });
            return res.status(200).send(item)
        } catch (err) {
            return res.status(400).send(err)
        }
    },

    async getAllBySpecialtyId(req, res){
        try {
            const id = req.query.specialty_id
            console.log(id)
            const item = await model.findAll({
                where: {
                    "specialty_id" : id
                }
            })
            return res.status(200).send(item)
        } catch (err) {
            return res.status(400).send(err)
        }
    },


    //only for vacancies

    async addDescription({ params: {id}, body}, res) {
        try {
            const item = await model.update( body, {
                where: {
                    id: id
                }
            })
            return res.status(200).send(item)
        } catch (err) {
            return res.status(400).send(err)
        }
    } //only for specialties

})

export {genericCrud}