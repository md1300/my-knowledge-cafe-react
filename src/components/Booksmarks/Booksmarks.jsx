import Booksmark from "../Booksmark/Booksmark";


const Booksmarks = ({booksmarks,readingTime}) => {
    return (
        <div className="w-1/3 ">
            
            <h1>reading time : {readingTime} minute</h1>

            <h1 className="text-center">Booksmarks : {booksmarks.length}</h1>

           {
            booksmarks.map(booksmark=><Booksmark
            booksmark={booksmark}
            ></Booksmark>)
           }
        </div>
    );
};

export default Booksmarks;
