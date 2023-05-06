// Задание №1
// Создайте в LocalStorage пустой объект localData, с ним в дальнейшем и будем работать
const object = {};
localStorage.setItem('localData', JSON.stringify(object));
//console.log(localStorage.getItem('localData'));

// Задание №2
// Сделайте форму, при submit'е которой, в LocalStorage, в объекте localData создаётся новый объект с ключом и информацией из вашей формы:
// пример нового объекта:
// {
//   key: data
// }
// где key - это value из первого input'а, а data - из второго
const firstInput = document.querySelector('.inp1');
const secondInput = document.querySelector('.inp2');

const btn = document.querySelector('.btn');

btn.addEventListener('click', (event) => {
  event.preventDefault();
  const localData = JSON.parse(localStorage.getItem('localData'));
  const key = firstInput.value;
  const value = secondInput.value;

  const newData = {
    [key]: value,
  };

  const newAndOldData = { ...localData, ...newData };
  localStorage.setItem('localData', JSON.stringify(newAndOldData));
});

// Задание №3
// Добавьте input и кнопку , при клике на которую - в LocalStorage, в объекте localData будет удаляться значение под ключом input
// Также добавьте кнопку, которая будет удалять весь объект localData из LocalStorage
const thirdInput = document.querySelector('.inp3');
const btn2 = document.querySelector('.btn-delete');

btn2.addEventListener('click', (event) => {
  event.preventDefault();
  const localData = JSON.parse(localStorage.getItem('localData'));
  const keyToDelete = thirdInput.value;

  delete localData[keyToDelete];
  localStorage.setItem('localData', JSON.stringify(localData));
});

const btn3 = document.querySelector('.delete-all');
btn3.addEventListener('click', (event) => {
  event.preventDefault();
  localStorage.removeItem('localData');
});
// Задание №4
// Создайте форму (<form></form>), которая при клике будет добавлять в localData новый объект из input'ов.
// У объектов должен быть уникальный ID - используйте для этого метод Date.now()

const input1 = document.querySelector('.obj-to-arr');
const input2 = document.querySelector('.obj-to-arr2');
const btn4 = document.querySelector('.add-arr');

btn4.addEventListener('click', (event) => {
  event.preventDefault();
  const localData = JSON.parse(localStorage.getItem('localData'));
  const key = input1.value;
  const value = input2.value;

  const newData = {
    [key]: value,
    id: Date.now(),
  };

  localData[newData.id] = newData;
  localStorage.setItem('localData', JSON.stringify(localData));
});
