import axios from "axios";
export const searchController = async (req: any, res: any) => {
    try {
        const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${req.query.search}`);
        res.json({data: response.data});
    } catch (err) {
        res.status(500).json({message: 'Something wrong.', msg: err.message});
    }
}