const fetchData = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return [
            {
              id: 1,
              title: 'Blog 1',
              description: 'Jelly beans ice cream ice cream pie soufflé. Jelly dragée sesame snaps oat cake sweet sesame snaps sweet. Gummi bears chocolate bar jelly beans marshmallow tootsie roll. Apple pie chocolate bar marzipan sesame snaps wafer cake halvah candy fruitcake.'
            },
            {
              id: 2,
              title: 'Blog 2',
              description: 'Cake brownie icing cookie cotton candy dessert icing. Cheesecake cookie sweet roll brownie cookie marshmallow candy canes. Donut carrot cake marshmallow cupcake tootsie roll pastry brownie. Gummi bears pudding biscuit toffee cookie.'
            },
             {
              id: 3,
              title: 'Blog 3',
              description: 'Sugar plum cupcake cheesecake marshmallow liquorice. Chupa chups sweet marshmallow topping biscuit jelly tart. Tiramisu pie sugar plum gummies wafer pastry.'
            },
            {
              id: 4,
              title: 'Blog 4',
              description: 'Bonbon powder chupa chups. Halvah bonbon icing apple pie caramels dessert jelly-o ice cream danish. Liquorice brownie bear claw cake fruitcake candy cake oat cake bonbon. Ice cream sweet roll pudding gummies toffee.'
            },
    ]
        
    
};

export default {
    fetchData
}