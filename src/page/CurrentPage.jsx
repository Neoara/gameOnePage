import { Row, Col, Button, Image, Card } from 'antd';
import React from 'react';
import './style.css';
import { PlusOutlined } from '@ant-design/icons';
import Anastasia from '../images/Anastasia.jpeg';
import Katya from '../images/Katya.jpeg';
import Rimma from '../images/Rimma.jpeg';
import Dana from '../images/Dana.jpeg';
import Aigul from '../images/Aigul.jpeg';
import Vika from '../images/Vika.jpeg';

const CurrentPage = () => {
  return (
    <div className="page">
      <Row justify="center" className="header">
        <Col className="header_image" align="middle">
          <Row style={{ height: '50px' }} />
          <Row className="header_text_title">
            БОЛЬШОЙ МЕЖДУНАРОДНЫЙ ФЕСТИВАЛЬ ТРАНСФОРМАЦИОННЫХ И БИЗНЕС-ИГР
            <br />В АСТАНЕ
          </Row>
          <Row style={{ height: '50px' }} />
          <Row align="middle" justify="center" className="header_when">
            <span style={{ color: 'rgb(211, 131, 242)', marginRight: 5 }}>
              16
            </span>
            Февраля
            <span style={{ margin: '0 10px' }}>|</span>{' '}
            <span style={{ color: 'rgb(211, 131, 242)' }}>11:00</span>{' '}
            <span style={{ margin: '0 10px' }}>|</span> АСТАНА
          </Row>
          <Row style={{ height: '50px' }} />
          <Row
            align="middle"
            justify="center"
            style={{ fontSize: 20, width: '80%' }}
          >
            г. Астана, ул. Достык, 18, БЦ «Москва», 24 этаж, зал «Меркури».
          </Row>
          <Row style={{ height: '50px' }} />
          <Row align="middle" justify="center">
            <Button className="header_btn">Связаться с нами</Button>
          </Row>
          <Row style={{ height: '50px' }} />
        </Col>
      </Row>
      <Row className="experience_block" justify="center">
        <Col xs={18}>
          <Row style={{ fontSize: 24 }}>
            Международный фестиваль трансформационных и бизнес-игр
          </Row>
          <Row style={{ fontSize: 18, letterSpacing: '-1px' }}>
            <h1>«РАСШИРЕНИЕ»</h1>
          </Row>
          <Row>
            <h1 style={{ marginBottom: 0, color: 'rgb(211, 131, 242)' }}>
              ОПЫТ ЛУЧШИХ
            </h1>
          </Row>
          <Row>
            <h1
              style={{
                marginBottom: 0,
                marginTop: 0,
              }}
            >
              ПОМОГАЮЩИХ
            </h1>
          </Row>
          <Row>
            <h1
              style={{
                marginBottom: 0,
                marginTop: 0,
              }}
            >
              ПРАКТИКОВ СТРАНЫ
            </h1>
          </Row>
          <Row>
            <h1 style={{ marginTop: 0, color: 'rgb(211, 131, 242)' }}>
              ДЛЯ ВАШЕГО
            </h1>
          </Row>
          <Row align="middle" style={{ marginTop: 30 }}>
            <Col
              xs={3}
              style={{
                color: 'rgb(211, 131, 242)',
                fontSize: 24,
              }}
            >
              <PlusOutlined />
            </Col>
            <Col
              xs={19}
              style={{
                fontSize: 24,
              }}
            >
              ИГРЫ
            </Col>
          </Row>
          <Row align="middle">
            <Col
              xs={3}
              style={{
                color: 'rgb(211, 131, 242)',
                fontSize: 24,
              }}
            >
              <PlusOutlined />
            </Col>
            <Col
              xs={19}
              style={{
                fontSize: 24,
              }}
            >
              МАСТЕР КЛАССЫ
            </Col>
          </Row>
          <Row align="middle">
            <Col
              xs={3}
              style={{
                color: 'rgb(211, 131, 242)',
                fontSize: 24,
              }}
            >
              <PlusOutlined />
            </Col>
            <Col
              xs={19}
              style={{
                fontSize: 24,
              }}
            >
              НЕТВОРКИНГ
            </Col>
          </Row>
          <Row align="middle" style={{ marginBottom: 30 }}>
            <Col
              xs={3}
              style={{
                color: 'rgb(211, 131, 242)',
                fontSize: 24,
              }}
            >
              <PlusOutlined />
            </Col>
            <Col
              xs={19}
              style={{
                fontSize: 24,
              }}
            >
              РОЗЫГРЫШ ПРИЗОВ
            </Col>
          </Row>
          <Row justify="center" style={{ marginBottom: 10 }}>
            <Image
              width={200}
              src="https://static.tildacdn.com/tild6539-3535-4438-b839-323662646165/IMG_2298_resized.png"
              alt="Пример изображения"
            />
          </Row>
          <Row justify="center" style={{ marginBottom: 10 }}>
            <Image
              width={200}
              src="https://static.tildacdn.com/tild3166-3966-4463-a634-303331616561/IMG_2227_resized.png"
              alt="Пример изображения"
            />
          </Row>
          <Row justify="center" style={{ marginBottom: 10 }}>
            <Image
              width={200}
              src="https://static.tildacdn.com/tild3536-3830-4762-b834-663738613864/_4.png"
              alt="Пример изображения"
            />
          </Row>
          <Row justify="center" style={{ marginBottom: 10 }}>
            <Image
              width={200}
              src="https://static.tildacdn.com/tild6235-3437-4231-b463-636534396531/_1.png"
              alt="Пример изображения"
            />
          </Row>
          <Row justify="center" style={{ marginBottom: 10 }}>
            <Col xs={20} className="purple-border">
              <p style={{ fontSize: 15, padding: 10, letterSpacing: -1 }}>
                Психологи, коучи, педагоги, предприниматели, нумерологи,
                специалисты удаленных профессий и многие другие представители
                бизнес-сегментов встретятся в одном месте, чтобы создать большую
                трансформацию
              </p>
            </Col>
          </Row>
          <Row
            justify={'center'}
            style={{
              textAlign: 'center',
              fontSize: 30,
              fontWeight: 'bold',
              marginTop: 20,
            }}
          >
            <span style={{ color: '#b35ad6' }}>ОПЫТ ЛУЧШИХ</span>
            ЗАПОМНИТ ЭТО СОБЫТИЕ!
          </Row>
        </Col>
      </Row>
      <Row className="answers_block" justify={'center'}>
        <Col xs={18}>
          <Row
            justify={'start'}
            align="middle"
            style={{ height: 70, marginTop: 50 }}
          >
            <span style={{ fontSize: 45, fontWeight: 600 }}>ЗДЕСЬ</span>
            <Col
              xs={1}
              style={{
                borderLeft: '5px solid #6f009b',
                height: 60,
                marginLeft: 10,
              }}
            />
          </Row>
          <Row
            style={{
              fontSize: 20,
              letterSpacing: 0,
              margin: '5px 0px 5px 0px',
            }}
          >
            С ПОМОЩЬЮ ЛУЧШИХ ИГР <br />
            ВЫ ВСЕГО ЗА ОДНУ ВСТРЕЧУ
          </Row>
          <Row style={{ fontSize: 25, fontWeight: 'bold' }}>
            РЕШИТЕ &nbsp;
            <div style={{ color: '#6f009b' }}>СВОИ САМЫЕ РАЗНЫЕ &nbsp;</div>
            ЗАПРОСЫ:
          </Row>
          <Row justify={'space-around'}>
            <Col className="purple-border" style={{ height: 130, width: 130 }}>
              <Row
                align={'middle'}
                justify={'center'}
                style={{
                  height: '100%',
                  textAlign: 'center',
                  fontSize: 18,
                }}
              >
                Личные отношения
              </Row>
            </Col>
            <Col className="purple-border" style={{ height: 130, width: 130 }}>
              <Row
                align={'middle'}
                justify={'center'}
                style={{
                  height: '100%',
                  textAlign: 'center',
                  fontSize: 18,
                }}
              >
                Рост в доходе
              </Row>
            </Col>
          </Row>
          <Row justify={'space-around'}>
            <Col className="purple-border" style={{ height: 130, width: 130 }}>
              <Row
                align={'middle'}
                justify={'center'}
                style={{
                  height: '100%',
                  textAlign: 'center',
                  fontSize: 18,
                }}
              >
                Родовые проблемы
              </Row>
            </Col>
            <Col className="purple-border" style={{ height: 130, width: 130 }}>
              <Row
                align={'middle'}
                justify={'center'}
                style={{
                  height: '100%',
                  textAlign: 'center',
                  fontSize: 18,
                }}
              >
                Страхи
              </Row>
            </Col>
          </Row>
          <Row justify={'space-around'}>
            <Col className="purple-border" style={{ height: 130, width: 130 }}>
              <Row
                align={'middle'}
                justify={'center'}
                style={{
                  height: '100%',
                  textAlign: 'center',
                  fontSize: 18,
                }}
              >
                Финансовые кризисы
              </Row>
            </Col>
            <Col className="purple-border" style={{ height: 130, width: 130 }}>
              <Row
                align={'middle'}
                justify={'center'}
                style={{
                  height: '100%',
                  textAlign: 'center',
                  fontSize: 18,
                }}
              >
                И даже сфера 18+
              </Row>
            </Col>
          </Row>
          <Row justify={'center'} style={{ marginBottom: 30 }}>
            <Col
              xs={17}
              style={{ fontSize: 25, fontWeight: 'bold', marginTop: 30 }}
            >
              БЕЗ ОТВЕТА!
              <div style={{ color: '#6f009b' }}>НИКТО НЕ УЙДЕТ</div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row style={{ backgroundColor: '#f3d6ff' }} justify={'center'}>
        <Col xs={18}>
          <Row
            style={{
              fontSize: 40,
              letterSpacing: -2,
              fontWeight: 'bold',
              marginTop: 20,
            }}
          >
            «ДОСТУПНАЯ СРЕДА»
          </Row>
          <Row style={{ marginTop: 20 }}>
            <Col xs={5}>
              <img
                src="https://optim.tildacdn.com/tild3231-3035-4237-b931-633930653132/-/resize/98x/-/format/webp/Group_48096539.png"
                alt=""
                width={50}
              />
            </Col>
            <Col xs={19}>
              <Row style={{ fontWeight: 'bold', fontSize: 20 }}>
                УДОБНОЕ РАЗМЕЩЕНИЕ И ПРОДУМАННАЯ ЛОГИСТИКА
              </Row>

              <Row style={{ fontSize: 18 }}>
                в том числе, если вы двигаетесь на коляске
              </Row>
            </Col>
          </Row>
          <Row style={{ marginTop: 20 }}>
            <Col xs={5}>
              <img
                src="https://optim.tildacdn.com/tild3231-3035-4237-b931-633930653132/-/resize/98x/-/format/webp/Group_48096539.png"
                alt=""
                width={50}
              />
            </Col>
            <Col xs={19}>
              <Row style={{ fontWeight: 'bold', fontSize: 20 }}>
                УЧАСТИЕ ДЛЯ ДЕТЕЙ ОТ 5-6 ЛЕТ - БЕСПЛАТНО
              </Row>

              <Row style={{ fontSize: 18 }}>
                вы можете взять своих детей с собой
              </Row>
            </Col>
          </Row>
          <Row style={{ marginTop: 20 }}>
            <Col xs={5}>
              <img
                src="https://optim.tildacdn.com/tild3231-3035-4237-b931-633930653132/-/resize/98x/-/format/webp/Group_48096539.png"
                alt=""
                width={50}
              />
            </Col>
            <Col xs={19}>
              <Row style={{ fontWeight: 'bold', fontSize: 20 }}>
                ПРОГРАММА ДЛЯ ДЕТЕЙ И ПОДРОСТКОВ
              </Row>

              <Row style={{ fontSize: 18 }}>
                <ul>
                  <li>
                    Дети от 10 до 14 лет - на выбор всегда есть 2 игры для
                    подростков, могут принять полноценное учатсие в фестивале
                  </li>
                  <li>
                    Дети от 5 до 9 лет - отдельный стол с развлечениями и
                    раскрасками
                  </li>
                </ul>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row justify={'center'} className="answers_block">
        <Col xs={18} style={{ marginTop: 50, marginBottom: 50 }}>
          <Row
            style={{
              fontSize: 26,
              letterSpacing: '-2px',
              fontWeight: 'bold',
              marginBottom: 30,
            }}
            justify={'center'}
          >
            ДЛЯ КОГО ФЕСТИВАЛЬ
          </Row>
          <Row>
            <Col
              className="purple-border"
              style={{
                height: '100%',
                width: '100%',
              }}
            >
              <Row
                style={{
                  fontSize: 22,
                  fontWeight: 'bold',
                  padding: 15,
                }}
              >
                <div style={{ color: '#6f009b' }}>НОВИЧКАМ &nbsp;</div>
                ПОМОГАЮЩИХ ПРОФЕССИЙ / ПСИХОЛОГАМ / КОУЧАМ
              </Row>
              <Row>
                <ul style={{ fontSize: 18 }}>
                  <li>поймете как продвигаться</li>
                  <li>
                    познакомитесь с топовыми игропрактиками и будете перенимать
                    их опыт
                  </li>
                </ul>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col
              className="purple-border"
              style={{
                height: '100%',
                width: '100%',
              }}
            >
              <Row
                style={{
                  fontSize: 22,
                  fontWeight: 'bold',
                  padding: 15,
                }}
              >
                <div style={{ color: '#6f009b' }}>ОПЫТНЫМ &nbsp;</div>
                ПОМОГАЮЩИМ ПРАКТИКАМ / ПСИХОЛОГАМ / КОУЧАМ
              </Row>
              <Row>
                <ul style={{ fontSize: 18 }}>
                  <li>Увидите возможности роста, если "упёрлись в потолок"</li>
                  <li>
                    войдете в комьюнити специалистов международнного уровня
                  </li>
                </ul>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col
              className="purple-border"
              style={{
                height: '100%',
                width: '100%',
              }}
            >
              <Row
                style={{
                  fontSize: 22,
                  fontWeight: 'bold',
                  padding: 15,
                }}
              >
                <div style={{ color: '#6f009b' }}>
                  ВСЕМ КТО МЕТАЕТ РАСТИ &nbsp;
                </div>
                И МЕНЯТЬ ССВОЮ ЖИЗНЬ К ЛУЧШЕМУ
              </Row>
              <Row>
                <ul style={{ fontSize: 18 }}>
                  <li>составите план действий по трансформации вашей жизни</li>
                  <li>познакомитесь с простым, но эффективным инструментом</li>
                  <li>играючи выявите провальные стратегии</li>
                </ul>
              </Row>
            </Col>
          </Row>
          <Row
            style={{
              fontSize: 22,
              letterSpacing: '-2px',
              fontWeight: 'bold',
              marginBottom: 30,
              textAlign: 'center',
              marginTop: 20,
            }}
            justify={'center'}
          >
            ПСИХОЛОГИ, КОУЧИ, ПРЕДПРЕНИМАТЕЛИ, ИГРОПРАКТИКИ, НУМЕРОЛОГИ,
            ТОП-МЕНЕДЖЕРЫ, И ПРОСТО ЛЮДИ, ЖАЖДУЩИЕ ПЕРЕМЕН
            <div style={{ color: '#6f009b' }}>&nbsp; РАДЫ КАЖДОМУ</div>
          </Row>
          <Row align="middle" justify="center">
            <Button className="header_btn">Связаться с нами</Button>
          </Row>
        </Col>
      </Row>
      <Row justify={'center'} className="invite_block">
        <Col xs={18} style={{ marginTop: 50, marginBottom: 50 }}>
          <Row
            style={{
              fontSize: 26,
              letterSpacing: '-2px',
              fontWeight: 'bold',
              marginBottom: 30,
              textAlign: 'center',
            }}
            justify={'center'}
          >
            МЫ ПРИГЛАШАЕМ ВСЕХ, КТО ХОЧЕТ:
          </Row>
          <Row>
            <Col
              className="purple-border"
              style={{
                height: '100%',
                width: '100%',
              }}
            >
              <Row align={'middle'} justify={'space-between'}>
                <Col
                  xs={6}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 10,
                  }}
                >
                  <div
                    style={{ border: '3px solid #b35ad6', borderRadius: 10 }}
                  >
                    <img
                      src="https://optim.tildacdn.com/tild6631-3738-4537-b063-633766646236/-/resize/94x/-/format/webp/33.png"
                      alt=""
                      width={47}
                      style={{ padding: 2 }}
                    />
                  </div>
                </Col>
                <Col xs={17}>изучить свои скрытые возможности и ресурсы</Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col
              className="purple-border"
              style={{
                height: '100%',
                width: '100%',
              }}
            >
              <Row align={'middle'} justify={'space-between'}>
                <Col
                  xs={6}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 10,
                  }}
                >
                  <div
                    style={{ border: '3px solid #b35ad6', borderRadius: 10 }}
                  >
                    <img
                      src="https://optim.tildacdn.com/tild6439-3966-4436-b366-613864616333/-/resize/96x/-/format/webp/1_.png"
                      alt=""
                      width={47}
                      style={{ padding: 2 }}
                    />
                  </div>
                </Col>
                <Col xs={17}>увидеть свои точки роста по разным сферам</Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col
              className="purple-border"
              style={{
                height: '100%',
                width: '100%',
              }}
            >
              <Row align={'middle'} justify={'space-between'}>
                <Col
                  xs={6}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 10,
                  }}
                >
                  <div
                    style={{ border: '3px solid #b35ad6', borderRadius: 10 }}
                  >
                    <img
                      src="https://optim.tildacdn.com/tild3238-6462-4636-a333-393964633862/-/resize/96x/-/format/webp/work-life-balance.png"
                      alt=""
                      width={47}
                      style={{ padding: 2 }}
                    />
                  </div>
                </Col>
                <Col xs={17}>
                  избавиться от неэффективных сценариев: в работе, в жизни, в
                  отношениях
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col
              className="purple-border"
              style={{
                height: '100%',
                width: '100%',
              }}
            >
              <Row align={'middle'} justify={'space-between'}>
                <Col
                  xs={6}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 10,
                  }}
                >
                  <div
                    style={{ border: '3px solid #b35ad6', borderRadius: 10 }}
                  >
                    <img
                      src="https://optim.tildacdn.com/tild3931-3739-4830-b464-336164626339/-/resize/96x/-/format/webp/2_.png"
                      alt=""
                      width={47}
                      style={{ padding: 2 }}
                    />
                  </div>
                </Col>
                <Col xs={17}>
                  понять, как сделать прорыв в доходе и профессии
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col
              className="purple-border"
              style={{
                height: '100%',
                width: '100%',
              }}
            >
              <Row align={'middle'} justify={'space-between'}>
                <Col
                  xs={6}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 10,
                  }}
                >
                  <div
                    style={{ border: '3px solid #b35ad6', borderRadius: 10 }}
                  >
                    <img
                      src="https://optim.tildacdn.com/tild6238-3131-4466-a238-633062613136/-/resize/96x/-/format/webp/5_.png"
                      alt=""
                      width={47}
                      style={{ padding: 2 }}
                    />
                  </div>
                </Col>
                <Col xs={17}>обзавестись сыльными окружением</Col>
              </Row>
            </Col>
          </Row>
          <Row
            style={{
              fontSize: 22,
              fontWeight: 'bold',
              padding: 15,
              textAlign: 'center',
              marginTop: 20,
            }}
          >
            <div style={{ color: '#6f009b' }}>
              НЕ НУЖНО ЖДАТЬ ПОНИДЕЛЬНИКА, &nbsp;
            </div>
            НОВОГО ГОДА ИЛИ ПЕРВОГО ЧИСЛА, ЧТОБЫ НАЧАТЬ ЖИТЬ СВОЮ ЛУЧШУЮ ЖИЗНЬ
          </Row>
          <Row align="middle" justify="center" style={{ marginTop: 20 }}>
            <Button className="header_btn">Связаться с нами</Button>
          </Row>
        </Col>
      </Row>
      <Row style={{ backgroundColor: '#f3d6ff' }} justify={'center'}>
        <Col xs={18}>
          <Row
            style={{
              fontWeight: 'bold',
              fontSize: 30,
              marginTop: 50,
              marginBottom: 20,
              textAlign: 'center',
            }}
          >
            ПРОГРАММА ФЕСТИВАЛЯ
          </Row>
          <Row
            className="purple-border"
            style={{ backgroundColor: 'white', height: 180 }}
          >
            <Col xs={24}>
              <Row
                style={{
                  color: ' #b35ad6',
                  textAlign: 'center',
                  fontSize: 30,
                  fontWeight: 'bold',
                  marginTop: 10,
                }}
                justify={'center'}
              >
                11:00 - 12:00
              </Row>
              <Row justify={'center'}>
                <Col xs={19} style={{ fontSize: 18, textAlign: 'center' }}>
                  Регистрация участников (настройтесь на позитив!)
                </Col>
              </Row>
            </Col>
          </Row>
          <Row
            className="purple-border"
            style={{ backgroundColor: 'white', height: 180 }}
          >
            <Col xs={24}>
              <Row
                style={{
                  color: ' #b35ad6',
                  textAlign: 'center',
                  fontSize: 30,
                  fontWeight: 'bold',
                  marginTop: 10,
                }}
                justify={'center'}
              >
                12:00 - 12:30
              </Row>
              <Row justify={'center'}>
                <Col xs={19} style={{ fontSize: 18, textAlign: 'center' }}>
                  Открытие фестиваля и первый розыгрыш подарков 🎁
                </Col>
              </Row>
            </Col>
          </Row>
          <Row
            className="purple-border"
            style={{ backgroundColor: 'white', height: 180 }}
          >
            <Col xs={24}>
              <Row
                style={{
                  color: ' #b35ad6',
                  textAlign: 'center',
                  fontSize: 30,
                  fontWeight: 'bold',
                  marginTop: 10,
                }}
                justify={'center'}
              >
                12:30 - 14:30
              </Row>
              <Row justify={'center'}>
                <Col xs={19} style={{ fontSize: 18, textAlign: 'center' }}>
                  Первая линейка трансформационных игр (погружение в новые
                  возможности)
                </Col>
              </Row>
            </Col>
          </Row>
          <Row
            className="purple-border"
            style={{ backgroundColor: 'white', height: 180 }}
          >
            <Col xs={24}>
              <Row
                style={{
                  color: ' #b35ad6',
                  textAlign: 'center',
                  fontSize: 30,
                  fontWeight: 'bold',
                  marginTop: 10,
                }}
                justify={'center'}
              >
                14:30 - 15:30
              </Row>
              <Row justify={'center'}>
                <Col xs={19} style={{ fontSize: 18, textAlign: 'center' }}>
                  Перерыв на обед и новые знакомства 🥗
                </Col>
              </Row>
            </Col>
          </Row>
          <Row
            className="purple-border"
            style={{ backgroundColor: 'white', height: 180 }}
          >
            <Col xs={24}>
              <Row
                style={{
                  color: ' #b35ad6',
                  textAlign: 'center',
                  fontSize: 30,
                  fontWeight: 'bold',
                  marginTop: 10,
                }}
                justify={'center'}
              >
                15:30 - 16:15
              </Row>

              <Row justify={'center'}>
                <Col xs={19} style={{ fontSize: 18, textAlign: 'center' }}>
                  Мастер-класс Анастасии Решетниковой «Управление реальностью» —
                  начните творить свою жизнь осознанно!
                </Col>
              </Row>
            </Col>
          </Row>
          <Row
            className="purple-border"
            style={{ backgroundColor: 'white', height: 180 }}
          >
            <Col xs={24}>
              <Row
                style={{
                  color: ' #b35ad6',
                  textAlign: 'center',
                  fontSize: 30,
                  fontWeight: 'bold',
                  marginTop: 10,
                }}
                justify={'center'}
              >
                16:15 - 18:15
              </Row>

              <Row justify={'center'}>
                <Col xs={19} style={{ fontSize: 18, textAlign: 'center' }}>
                  Вторая линейка игр (преобразите своё мышление)
                </Col>
              </Row>
            </Col>
          </Row>
          <Row
            className="purple-border"
            style={{ backgroundColor: 'white', height: 180, marginBottom: 50 }}
          >
            <Col xs={24}>
              <Row
                style={{
                  color: ' #b35ad6',
                  textAlign: 'center',
                  fontSize: 30,
                  fontWeight: 'bold',
                  marginTop: 10,
                }}
                justify={'center'}
              >
                18:15 - 19:00
              </Row>
              <Row justify={'center'}>
                <Col xs={19} style={{ fontSize: 18, textAlign: 'center' }}>
                  Финальные итоги, розыгрыш призов и заряд на весь год 🎉
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row justify={'center'}>
        <Col xs={18}>
          <Row className="purple-border" style={{ marginTop: 50 }}>
            <Card style={{ width: '100%' }}>
              <Row>
                <img src={Anastasia} alt="" width={'100%'} />
              </Row>
              <Row>
                <h2>Анастасия Решетникова</h2>
              </Row>
              <Row>
                <h4 style={{ marginTop: 0 }}>
                  Oснователь Международной школы игропрактики, коуч,
                  бизнес-тренер, предприниматель.
                </h4>
              </Row>
              <Row>
                Мастер-класс «Управление реальностью». <br />
                Узнаете, как стать архитектором своей судьбы. <br /> <br />
                🌟 Фокус на деньги, успех и карьеру. <br />
                🌟 Игровой формат: легко и эффективно.
                <br />
                🌟 100% практики, которая работает.
                <br />
                <br />
                Это больше, чем фестиваль. Это точка невозврата к прежней жизни.
              </Row>
            </Card>
          </Row>
          <Row className="purple-border" style={{ marginTop: 50 }}>
            <Card style={{ width: '100%' }}>
              <Row>
                <img src={Katya} alt="" width={'100%'} />
              </Row>
              <Row>
                <h2>Екатерина Аткина</h2>
              </Row>
              <Row>
                <h4 style={{ marginTop: 0, marginBottom: 0 }}>
                  Практикующий имидж стилист, профессиональный игропрактик.{' '}
                  <br />
                  <br />
                  Трансформационная игра " ПОЧЕМУ ЖЕНЩИНА убивает ...в себе
                  женщину?"
                </h4>
              </Row>
              <Row>
                <ul style={{ padding: 20 }}>
                  <li>найдешь своё место силы</li>
                  <li>услышишь, где ты себя разрушаешь</li>
                  <li>осознаешь свои сильные стороны</li>
                  <li>увидишь паттерны поведения и зоны роста</li>
                  <li>выявишь, что забирает твою энергию</li>
                  <li>почувствуешь, что действительно тебя вдохновляет</li>
                  <li>
                    научишься принимать все проявления своих чувств и эмоций
                  </li>
                  <li>ощутишь свою ценность…</li>
                </ul>
              </Row>
            </Card>
          </Row>
          <Row className="purple-border" style={{ marginTop: 50 }}>
            <Card style={{ width: '100%' }}>
              <Row>
                <img src={Rimma} alt="" width={'100%'} />
              </Row>
              <Row>
                <h2>Римма Близнецова</h2>
              </Row>
              <Row>
                <h4 style={{ marginTop: 0 }}>
                  Профессиональный игропрактик, энергопрактик, Мастер Рейки,
                  эксперт по недвижимости, автор мастер класса «Деньги в жизни
                  риэлтора», организатор мероприятий.
                </h4>
              </Row>
              <Row>
                Трансформационная игра ХОЧУ МОГУ И БУДУ затрагивает
                онтологический уровень - закономерную взаимосвязь всех
                составляющих, формирующих индивидуальную картину мира:
                убеждений, привычек, страхов, опыта, воспоминаний и т.д. Игра
                позволяет «переместиться в другую картину мира», где нет
                ограничивающих рамок. Основное достоинство игры в том, что она
                предлагает ПРАКТИЧЕСКИЕ ДЕЙСТВИЯ по трансформации сознания.
                <br /> <br />
                По итогам игры участники получают представление о том, какие
                установки, убеждения и действия мешают им в достижении
                поставленных целей и практические навыки, дающие возможность
                изменить привычные жизненные стратегии.
              </Row>
            </Card>
          </Row>
          <Row className="purple-border" style={{ marginTop: 50 }}>
            <Card style={{ width: '100%' }}>
              <Row>
                <img src={Dana} alt="" width={'100%'} />
              </Row>
              <Row>
                <h2>Дана Есен</h2>
              </Row>
              <Row>
                <h4 style={{ marginTop: 0 }}>
                  Трансформационный ментор, нейрокоуч, психолог, мак-терапевт и
                  проводник к личным открытиям.
                </h4>
              </Row>
              <Row>
                <span style={{ fontWeight: 'bold' }}>
                  Игра «Женское счастье»
                </span>
                Это пространство глубокого погружения в себя, где вы сможете:
                <ul style={{ paddingLeft: 20 }}>
                  <li>
                    Освободиться от обид, страхов и тревог, которые мешают
                    чувствовать гармонию.
                  </li>
                  <li>
                    Обрести состояния любви, доверия и принятия себя и мира.
                  </li>
                  <li>
                    Осознать, что для вас значит «истинное счастье», и наметить
                    путь к нему.
                  </li>
                </ul>
                <span style={{ fontWeight: 'bold' }}>
                  Игра «Территория денег»
                </span>
                Если вы хотите улучшить свои финансовые потоки и освободиться от
                блоков, эта игра станет вашим путеводителем к изобилию.
                <ul style={{ paddingLeft: 20 }}>
                  <li>
                    Найдете установки и сценарии, которые ограничивают ваш
                    доход.
                  </li>
                  <li>
                    Трансформируете мышление и выстроите стратегию финансового
                    роста.
                  </li>
                  <li>
                    Узнаете, как принимать и удерживать деньги, сохраняя баланс.
                  </li>
                  <li>
                    Наметите план действий для достижения желаемого дохода.
                  </li>
                </ul>
              </Row>
            </Card>
          </Row>
          <Row className="purple-border" style={{ marginTop: 50 }}>
            <Card style={{ width: '100%' }}>
              <Row>
                <img src={Aigul} alt="" width={'100%'} />
              </Row>
              <Row>
                <h2>Айгуль Беисова</h2>
              </Row>
              <Row>
                <h4 style={{ marginTop: 0 }}>
                  Магистр педагогических наук, предприниматель,
                  сертифицированный игропрактик и организатор фестиваля
                  трансформационных игр «Расширение» в городе Костанай.
                </h4>
              </Row>
              <Row>
                Игра «Личный бренд – эра влияния и денег», которая помогает
                понять, как заявить о себе в современном мире и начать жить в
                изобилии.
                <br />
                <br />
                <span style={{ fontWeight: 'bold' }}>
                  Игра «Личный бренд – эра влияния и денег» отвечает на главные
                  вопросы:
                </span>
                <ul style={{ paddingLeft: 20 }}>
                  <li>Что такое личный бренд и зачем он нужен?</li>
                  <li>
                    Как его развитие влияет на уровень дохода и признание?
                  </li>
                  <li>
                    Какие шаги вы можете сделать уже сегодня, чтобы заявить о
                    себе?
                  </li>
                </ul>
                <br />
                <br />
                <span style={{ fontWeight: 'bold' }}>
                  🎯 Что дает участие в игре?
                </span>
                <ul style={{ paddingLeft: 20, marginTop: 0 }}>
                  <li>
                    Новый взгляд на себя. Вы пересмотрите отношение к своему
                    потенциалу и начнете ценить свою уникальность.
                  </li>
                  <li>
                    Ясность в действиях. Узнаете, как развивать личный бренд,
                    чтобы он стал источником влияния и дохода.
                  </li>
                  <li>
                    Изменение мышления. После игры вы начнете видеть возможности
                    для роста там, где раньше были преграды.
                  </li>
                </ul>
              </Row>
            </Card>
          </Row>
          <Row className="purple-border" style={{ marginTop: 50 }}>
            <Card style={{ width: '100%' }}>
              <Row>
                <img src={Vika} alt="" width={'100%'} />
              </Row>
              <Row>
                <h2>Виктория Когай</h2>
              </Row>
              <Row>
                <h4 style={{ marginTop: 0 }}>
                  Врач, коуч и сертифицированный игропрактик. Трансформационная
                  игра «Отыграйся по полной!».
                </h4>
              </Row>
              <Row>
                <span style={{ fontWeight: 'bold' }}>
                  Игра помогает осознать:
                </span>
                <ul style={{ paddingLeft: 20, marginTop: 0 }}>
                  <li>
                    Как вы взаимодействуете с деньгами. Это дружба, зависимость
                    или избегание?
                  </li>
                  <li>
                    Какие внутренние установки мешают вашему финансовому потоку?
                  </li>
                  <li>
                    Какие ресурсы уже есть внутри вас, чтобы увеличить доходы?
                  </li>
                </ul>
                <span style={{ fontWeight: 'bold' }}>В игре вы сможете:</span>
                <ul style={{ paddingLeft: 20, marginTop: 0 }}>
                  <li>Найти свои ограничения в теме денег и устранить их.</li>
                  <li>
                    Понять, какие убеждения вы переняли от родителей, общества
                    или прошлых опытов.
                  </li>
                  <li>
                    Осознать свою ценность и научиться быть в гармонии с
                    деньгами.
                  </li>
                  <li>Переключить мышление с «недостатка» на изобилие.</li>
                </ul>
              </Row>
            </Card>
          </Row>
        </Col>
      </Row>

      <Row style={{ marginTop: 100 }}>
        <Col className="header_image" align="middle">
          <Button
            className="header_btn"
            style={{ marginTop: 20, marginBottom: 20 }}
          >
            Связаться с нами
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default CurrentPage;
