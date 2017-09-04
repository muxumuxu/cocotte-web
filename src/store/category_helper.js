import DairyImage from '@/assets/images/dairy.svg'
import FruitsVegeImage from '@/assets/images/fruits_vege.svg'
import FishSeafoodImage from '@/assets/images/fish_seafood.svg'
import CondimentsImage from '@/assets/images/condiments.svg'
import DrinksImage from '@/assets/images/drinks.svg'
import DeliImage from '@/assets/images/deli.svg'
import DesertsImage from '@/assets/images/deserts.svg'
import CarbsImage from '@/assets/images/carbs.svg'
import MiscellaniousImage from '@/assets/images/miscellaneous.svg'
import MeatImage from '@/assets/images/meat.svg'
import CookedFoodImage from '@/assets/images/cooked_food.svg'
import PlantsImage from '@/assets/images/plants.svg'

const imageForCategory = (category) => {
  switch (category.serverId) {
    case 1:
      return MeatImage
    case 3:
      return FruitsVegeImage
    case 4:
      return PlantsImage
    case 5:
      return DairyImage
    case 6:
      return FishSeafoodImage
    case 9:
      return CookedFoodImage
    case 10:
      return DeliImage
    case 12:
      return MiscellaniousImage
    case 15:
      return DrinksImage
    case 16:
      return CondimentsImage
    case 17:
      return DesertsImage
    case 18:
      return CarbsImage
    default:
      return MiscellaniousImage
  }
}

export default imageForCategory
