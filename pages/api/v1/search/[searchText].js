// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";

export default function handler(req, res) {
  const { searchText } = req.query;
  console.log(searchText);
  if (searchText.length > 0) {
    axios
      .get(`http://theestablished.quintype.io/api/v1/search/`, {
        params: { q: searchText },
      })
      .then((response) => {
        return res.status(200).send(response.data);
      })
      .catch((e) => {
        console.log("search api error", e);
        return res.status(500).send(e);
      });
  }
}
