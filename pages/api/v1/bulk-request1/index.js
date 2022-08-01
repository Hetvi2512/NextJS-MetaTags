// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";

export default function handler(req, res) {
    axios
      .post(`https://theestablished.quintype.io/api/v1/bulk-request`, req.body)
      .then((response) => {
        console.log("response",response)
        return res.status(200).send(response.data);
      })
      .catch((e) => {
        console.log(" api error", e);
        return res.status(500).send(e);
      });
  
}
