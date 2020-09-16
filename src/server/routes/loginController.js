module.exports = {
  post: (req, res) => {
      console.log('req.user:', req.user);
      const {
        user_id,
        username,
        first_name,
        last_name,
        total_mins,
        current_river,
        current_activity,
        location,
        travel_history,
        certification} = req.user;
      // console.log('req.body:', req.body);
      res.status(200).send({
        user_id,
        username,
        first_name,
        last_name,
        total_mins,
        current_river,
        current_activity,
        location,
        travel_history,
        certification
      });
    }
}