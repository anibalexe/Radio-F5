import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import {publicationAddApi} from "../../../../api/publication";

import {
  Form,
  Input,
  Button,
  Radio,
  Checkbox,
  notification,
  Row,
  Col,
  Divider,
  Upload,
  Image,
  Card,
} from "antd";

import "./PublicationForm.scss";

import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import FormItem from "antd/lib/form/FormItem";
import { getAccessTokenApi } from "../../../../api/auth";



const RadioGroup = Radio.Group;

export default function PublicationForm() {
  const [inputs, setInputs] = useState({
    title: "",
    image: "",
    content: "",
    author: "",
    visibility: "",
    section: "",
  });

  const [formValid, setFormValid] = useState({
    title: false,
    image: false,
    content: false,
    author: false,
    visibility: false,
    section: false,
  });

  const [stateEditor, setStateEditor] = useState({
    content: EditorState.createEmpty(),
  });

  const onEditorStateChange = (content) => {
    setStateEditor({
      content,
    });
    setInputs({...inputs, content: draftToHtml(convertToRaw(stateEditor.content.getCurrentContent()))});
    //console.log(draftToHtml(convertToRaw(stateEditor.content.getCurrentContent())));
  };

  const changeForm = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
    //setInputs({...inputs, content: draftToHtml(convertToRaw(stateEditor.content.getCurrentContent()))});
  };

  const add = () => {
    const token = getAccessTokenApi();
    //setInputs({...inputs, content: draftToHtml(convertToRaw(stateEditor.content.getCurrentContent()))});
    const { title, image, content, author, visibility, section } = formValid;
    const titleVal = inputs.title;
    const imageVal = inputs.image;
    const contentVal = inputs.content;
    const authorVal = inputs.author;
    const visibilityVal = inputs.visibility;
    const sectionVal = inputs.section;

    console.log(inputs);

    if (
      !titleVal ||
      !imageVal ||
      !contentVal ||
      !authorVal ||
      !visibilityVal ||
      !sectionVal
    ) {
      notification["error"]({
        message: "Todos los campos son obligatorios.",
      });
    } else {
      const result = publicationAddApi(token, inputs);
      notification["success"]({
        message: "Publicación agregada con exito.",
      });
      window.location.href = "/admin/publications";
    }
  };

  return (
    <>
      <Card>
        <Form className="publication-form" onChange={changeForm} onFinish={add}>
          <Divider orientation="center">
            <h2 className="publication-form__title">
              Formulario de nueva publicación
            </h2>
          </Divider>
          <Row className="publication-form__row" type="flex">
            <Col className="publication-form__row__col" flex={4}>
              <Card
                type="inner"
                size="small"
                title="Datos de la noticia"
                className="publication-form__row__col__card"
              >
                <Form.Item>
                  <Input
                    prefix={
                      <MailOutlined style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="text"
                    name="title"
                    placeholder="Titular"
                    className="publication-form__row__col__card__input"
                    value={inputs.title}
                  />
                </Form.Item>

                <Form.Item>
                  <Input
                    prefix={
                      <UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="text"
                    name="image"
                    placeholder="Imagen"
                    className="publication-form__row__col__card__input"
                    value={inputs.image}
                  />
                </Form.Item>

                <Form.Item>
                  <Input
                    prefix={
                      <LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="text"
                    name="author"
                    placeholder="Autor"
                    className="publication-form__row__col__card__input"
                    value={inputs.author}
                  />
                </Form.Item>
                <Card className="publication-form__row__col__card__card" >
                  <Editor
                    wrapperClassName="wrapper-class"
                    editorClassName="editor-class"
                    toolbarClassName="toolbar-class"
                    onEditorStateChange={onEditorStateChange}
                  />
                </Card>
              </Card>
            </Col>

            <Col className="publication-form__row__col" flex={1}>
              <Card
                type="inner"
                size="small"
                title="Visibilidad"
                className="publication-form__row__col__card"
              >
                <Form.Item>
                  <RadioGroup name="visibility">
                    <Radio value={1}>Publico</Radio>
                    <Radio value={2}>Privado</Radio>
                    <Radio value={3}>Oculto</Radio>
                  </RadioGroup>
                </Form.Item>
              </Card>

              <Card
                type="inner"
                size="small"
                title="Seccion"
                className="publication-form__row__col__card"
              >
                <Form.Item>
                  <RadioGroup name="section">
                    <Radio value={1}>Nacional</Radio>
                    <Radio value={2}>Internacional</Radio>
                    <Radio value={3}>Ciencia</Radio>
                    <Radio value={4}>Deporte</Radio>
                  </RadioGroup>
                </Form.Item>
              </Card>
            </Col>
          </Row>

          <Row className="publication-form__row" type="flex">
            <Col className="publication-form__row__col" flex={5}>
              <Form.Item>
                <Button htmlType="submit" className="publication-form__row__col__button">
                  <UserAddOutlined />
                  Agregar publicación
                </Button>
              </Form.Item>
            </Col>
          </Row>

        </Form>
      </Card>
    </>
  );
}
