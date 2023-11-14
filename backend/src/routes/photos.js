const dbquery = require("./dbquery");
const router = require("express").Router();

module.exports = (db) => {
  // Endpoint to mark a photo as a favorite
  router.post("/photos/:photoId/favorite", (req, res) => {
    const { photoId } = req.params;
    const { userId } = req.body; // Assuming userId is sent in the request body

    // Insert into favorites table
    const query = `
      INSERT INTO favorites (user_id, photo_id)
      VALUES ($1, $2)
    `;

    db.query(query, [userId, photoId])
      .then(() => {
        res.status(200).send("Photo marked as favorite");
      })
      .catch((error) => {
        console.error("Error marking photo as favorite:", error);
        res.status(500).send("Internal Server Error");
      });
  });

  // Endpoint to get user's favorite photos
  router.get("/favorites/:userId", (req, res) => {
    const { userId } = req.params;

    // Retrieve favorite photos for a user
    const query = `
      SELECT photos.*
      FROM photos
      JOIN favorites ON photos.id = favorites.photo_id
      WHERE favorites.user_id = $1
    `;

    db.query(query, [userId])
      .then((result) => {
        const favoritePhotos = result.rows;
        res.status(200).json(favoritePhotos);
      })
      .catch((error) => {
        console.error("Error getting favorite photos:", error);
        res.status(500).send("Internal Server Error");
      });
  });

  return router;
};

// const dbquery = require("./dbquery");
// const router = require("express").Router();

// module.exports = db => {
//   router.get("/photos", (request, response) => {
//     const protocol = request.protocol;
//     const host = request.hostname;
//     const port = process.env.PORT || 8001;
//     const serverUrl = `${protocol}://${host}:${port}`;

//      // Endpoint to mark a photo as a favorite
//   router.post("/photos/:photoId/favorite", (req, res) => {
//     const { photoId } = req.params;
//     const { userId } = req.body; // Assuming userId is sent in the request body

//     // Insert into favorites table
//     const query = `
//       INSERT INTO favorites (user_id, photo_id)
//       VALUES ($1, $2)
//     `;
//  // Endpoint to mark a photo as a favorite
//  router.post("/photos/:photoId/favorite", (req, res) => {
//   const { photoId } = req.params;
//   const { userId } = req.body; // Assuming userId is sent in the request body

//   // Insert into favorites table
//   const query = `
//     INSERT INTO favorites (user_id, photo_id)
//     VALUES ($1, $2)
//   `;

//   db.query(query, [userId, photoId])
//     .then(() => {
//       res.status(200).send("Photo marked as favorite");
//     })
//     .catch((error) => {
//       console.error("Error marking photo as favorite:", error);
//       res.status(500).send("Internal Server Error");
//     });
// });

// // Endpoint to get user's favorite photos
// router.get("/favorites/:userId", (req, res) => {
//   const { userId } = req.params;

//   // Retrieve favorite photos for a user
//   const query = `
//     SELECT photos.*
//     FROM photos
//     JOIN favorites ON photos.id = favorites.photo_id
//     WHERE favorites.user_id = $1
//   `;

//   db.query(query, [userId])
//     .then((result) => {
//       const favoritePhotos = result.rows;
//       res.status(200).json(favoritePhotos);
//     })
//     .catch((error) => {
//       console.error("Error getting favorite photos:", error);
//       res.status(500).send("Internal Server Error");
//     });
// });

// // ... (existing code)

// return router;
// };
//     db.query(query, [userId, photoId])
//       .then(() => {
//         res.status(200).send("Photo marked as favorite");
//       })
//       .catch((error) => {
//         console.error("Error marking photo as favorite:", error);
//         res.status(500).send("Internal Server Error");
//       });
//   });

//   // Endpoint to get user's favorite photos
//   router.get("/favorites/:userId", (req, res) => {
//     const { userId } = req.params;

//     // Retrieve favorite photos for a user
//     const query = `
//       SELECT photos.*
//       FROM photos
//       JOIN favorites ON photos.id = favorites.photo_id
//       WHERE favorites.user_id = $1
//     `;

//     db.query(query, [userId])
//       .then((result) => {
//         const favoritePhotos = result.rows;
//         res.status(200).json(favoritePhotos);
//       })
//       .catch((error) => {
//         console.error("Error getting favorite photos:", error);
//         res.status(500).send("Internal Server Error");
//       });
//   });

// };

//   });

//   return router;
// };
