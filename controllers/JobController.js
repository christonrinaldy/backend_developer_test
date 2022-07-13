const axios = require('axios').default;

class JobController {
    static getJobs(req, res) {
        let filters = req.query

        axios.get('http://dev3.dansmultipro.co.id/api/recruitment/positions.json')
            .then((raw) => {
                const resultRaw = Object.assign([], raw.data);
                var filtered = resultRaw.filter((val) => {
                    let isTrue = true
                    for (const key in filters) {
                        if (key == "full_time" && filters[key] == "true") { isTrue = isTrue && val["type"].toLowerCase() == "full time" }
                        else {
                            isTrue = isTrue && val[key].toLowerCase().includes(filters[key].toLowerCase())
                        }

                    }
                    console.log(isTrue)
                    return isTrue
                })
                res.send(filtered)
            })
            .catch(err => {
                res.send(err)
            })

    }
    static getJobById(req, res) {
        const { id } = req.params;
        const url = `http://dev3.dansmultipro.co.id/api/recruitment/positions/${id}`
        console.log(url);
        axios.get(url)
            .then(raw => {
                res.send(raw.data);
            })
            .catch(err => {
                res.send(err)
            })
    }
}
module.exports = JobController