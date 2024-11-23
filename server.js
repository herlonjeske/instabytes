import express from "express";
import routes from "./src/routes/postsRoutes.js";
/*
const posts = [
    {
        id: 1, descrição: "Um gato fofo dormindo",
        imagem: "https://placecats.com/millie/300/150"
      },
      {
        id: 2, descrição: "Paisagem montanhosa",
        imagem: "https://picsum.photos/seed/picsum/200/300"
      },
      {
        id: 3, descrição: "Comida deliciosa",
        imagem: "https://loremflickr.com/320/240/food"
      },
      {
        id: 4, descrição: "Cachorro brincando",
        imagem: "https://random.dog/woof.json" 
      },
      {
        id: 5, descrição: "Carro esportivo",
        imagem: "https://source.unsplash.com/random/300x200/?car"
      },
]
*/
const app = express();
app.use(express.static("uploads"));
routes(app);

app.listen(3000, () => {
    console.log("servidorescutando...");
});

/*
function buscarpost(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id)
    })
}

app.get("/posts/:id", (req, res) => {
    const index = buscarpost(req.params.id)
    res.status(200).json(posts[index]);
});
*/