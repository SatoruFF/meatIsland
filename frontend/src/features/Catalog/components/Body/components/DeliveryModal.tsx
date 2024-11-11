import _ from "lodash";
import { Modal, Form, Input, Radio, Button, message } from "antd";
import { useEffect, useState } from "react";

import styles from "../stylesBody.module.less";
import { ISaleAttrs } from "../../../../../Types/Sale";
import { createSail } from "../../../../../services/saleService";
import basketStore from "../../../../../store/storeBasket";

const { TextArea } = Input;

const DeliveryModal = ({ items, isOpen, onClose, countProduct, sumPrice }) => {
  const [modalWidth, setModalWidth] = useState("50%");
  const [successfulOrder, setSuccessfulOrder] = useState(false);

  const [form] = Form.useForm();
  const { basket } = basketStore();

  const onCloseModal = () => {
    setSuccessfulOrder(false);
    onClose();
  };

  const handleSubmit = async (values: ISaleAttrs) => {
    try {
      await createSail({
        data: _.assign(values, {
          products: Array.isArray(basket)
            ? basket.map((i) => {
                return { product: i.id, quantity: i.quantity };
              })
            : _.map(basket, (item, id) => {
                return { product: id, quantity: item.quantity };
              }),
        }),
      }); // TODO: удалить это стремный костыль
      setSuccessfulOrder(true);
    } catch (error) {
      message.error(
        `Что то пошло не так при оформлении заказа, текст ошибки: ${error.message}}`
      );
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 950) {
        setModalWidth("90%");
      } else if (window.innerWidth <= 1200) {
        setModalWidth("80%");
      } else if (window.innerWidth <= 1400) {
        setModalWidth("70%");
      } else {
        setModalWidth("50%");
      }
    };

    window.addEventListener("resize", handleResize);

    // Очистка обработчика события при размонтировании компонента
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!isOpen || !items) return null;

  return (
    <Modal
      title={<h2 className={styles.deliveryModalTitle}>Доставка</h2>}
      open={isOpen}
      footer={null}
      onCancel={onCloseModal}
      width={modalWidth}
      wrapClassName={styles.deliveryModal}
    >
      {successfulOrder ? (
        <div className={styles.successfulOrderContainer}>
          <div>Заказ успешно оформлен 🎉</div>
          <div>Ближайшее время вам позвонит наш менеджер</div>
        </div>
      ) : (
        <Form
          form={form}
          onFinish={handleSubmit}
          className={styles.deliveryForm}
          initialValues={{ deliveryMethod: "delivery" }}
        >
          <Form.Item
            className={styles.formInputContainer}
            name="name"
            rules={[
              { required: true, message: "Пожалуйста, введите ваше имя!" },
            ]}
          >
            <Input className={styles.formInput} placeholder="Ваше имя" />
          </Form.Item>

          <Form.Item
            name="phone"
            rules={[
              { required: true, message: "Пожалуйста, введите ваш телефон!" },
            ]}
          >
            <Input className={styles.formInput} placeholder="Телефон" />
          </Form.Item>

          <Form.Item name="deliveryMethod">
            <Radio.Group className={styles.radioBtn}>
              <Radio className={styles.radioBtn} value="selfPickup">
                Самовывоз
              </Radio>
              <Radio className={styles.radioContainer} value="delivery">
                Доставка
              </Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            name="address"
            rules={[{ required: true, message: "Пожалуйста, введите адрес!" }]}
          >
            <Input
              className={styles.formInput}
              placeholder="Адрес (улица, дом, квартира)"
            />
          </Form.Item>
          <Form.Item name="floor">
            <Input className={styles.formInput} placeholder="Этаж" />
          </Form.Item>
          <Form.Item name="intercom">
            <Input className={styles.formInput} placeholder="Домофон" />
          </Form.Item>

          <Form.Item name="comment">
            <TextArea
              rows={4}
              className={styles.formInput}
              placeholder="Комментарий к заказу"
            />
          </Form.Item>

          <Form.Item>
            <div className={styles.titleBtnTop}>
              Доставка осушествляеться только по городу Казань с 9:00 - 20:00
            </div>
            <Button type="primary" htmlType="submit" className={styles.formBtn}>
              Оформить
            </Button>
          </Form.Item>
        </Form>
      )}
    </Modal>
  );
};

export default DeliveryModal;
