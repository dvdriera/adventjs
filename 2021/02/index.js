export default function listGifts(letter) {
    const cleanedLetter = letter.trim().replace(/\s\s*/,' ')

    const list = cleanedLetter.split(' ')
    const filteredList = list.filter(gift => !/^\_/.test(gift))

    const listOfGifts = {}
    filteredList.forEach(gift => {
        listOfGifts[gift] ? listOfGifts[gift]++ : listOfGifts[gift] = 1 
    });

    console.log(listOfGifts)
    return listOfGifts
}