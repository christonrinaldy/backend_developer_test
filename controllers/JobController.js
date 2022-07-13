const axios = require('axios').default;

class JobController {
    static getJobs(req, res) {
        let filters = req.query

        const limit = 9
        const { page } = req.query

        axios.get('http://dev3.dansmultipro.co.id/api/recruitment/positions.json')
            .then((raw) => {
                const resultRaw = Object.assign([], raw.data);
                var filtered = resultRaw.filter((val, index) => {
                    if (page != undefined) {
                        if (index < (page - 1) * limit || index > (page * limit) - 1) return false
                    }
                    let isTrue = true
                    for (const key in filters) {
                        if (key == "page") continue;
                        if (key == "full_time" && filters[key] == "true") { isTrue = isTrue && val["type"].toLowerCase() == "full time" }
                        else {
                            isTrue = isTrue && val[key].toLowerCase().includes(filters[key].toLowerCase())
                        }

                    }
                    return isTrue
                })
                res.send({code: 200, status: "SUCCESS", data: filtered})
            })
            .catch(err => {
                res.send({code: 500, msg: "Internal Server Error"})
            })

    }
    static getJobById(req, res) {
        const { id } = req.params;
        const url = `http://dev3.dansmultipro.co.id/api/recruitment/positions/${id}`
        axios.get(url)
            .then(raw => {
                res.send({code: 200, status: "SUCCESS", data: raw.data})
            })
            .catch(err => {
                console.log(err)
                res.send({code: 500, msg: "Internal Server Error"})
            })
    }
}
module.exports = JobController