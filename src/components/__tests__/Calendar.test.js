import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import Calendar from '../Calendar';
import { create } from 'react-test-renderer';

let container = null;
beforeEach(() => {
  // подготавливаем DOM-элемент, куда будем рендерить
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // подчищаем после завершения
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('March has 31 days ',() =>{

  const component = create (<Calendar month = {2} />);
  expect(component.toJSON().children[1].children[4].children[4].children[0]).toMatch(/31/);
});

it('February had 29 days in 2004',() =>{
  const  component  = create (<Calendar month = {1} year = {2004}/>);
  expect(component.toJSON().children[1].children[4].children[0].children[0]).toMatch(/29/);
});

it('February had only 28 days in 2005',() =>{
  const  component  = create (<Calendar month = {1} year = {2005}/>); 
  expect(component.toJSON().children[1].children).not.toBeUndefined();        // children[4] это 5ая строка в таблице
  expect(component.toJSON().children[1].children[4].children).toBeUndefined(); // если в календаре 28 дней, то они укладываются в 4 строки
});                                                                            // и пятой быть не должно (Undefined)
   
   
test('Matches the snapshot', () => {
  const calendar = create(<Calendar month = {1} year = {2004}/>);
  expect(calendar.toJSON()).toMatchSnapshot();
});