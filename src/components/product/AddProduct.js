import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from 'draftjs-to-html';
import '../../css/custom.css';
import Upload from '../Upload';
import Spinners from '../Spinners';
function AddProduct(props) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );
    const [description, setDescription] = useState('');
    const { loadingBtn, handleCloseModal, handleAddProduct, rsForm, handleRsForm, types, nxb } = props;
    const [files, setFiles] = useState(null);
    useEffect(() => {
        if (rsForm) {
            reset({
                title: '',
                author: '',
                description: '',
                price: '',
                publicYear: '',
                inStock: ''
            })
            handleRsForm(false)
        }
    }, [rsForm])
    const handleClose = () => {
        handleCloseModal()
    }
    const onSubmit = (data) => {
        if (files !== null) {
            if (data.types === "") data.types = types[0];
            if (data.publicCompany === "") data.publicCompany = nxb[0];
            data.description = description;
            Number(data.sale);
            handleAddProduct(data, files);
            setEditorState(() => {
                EditorState.createEmpty()
            });
        }
    }
    const onSubmitImage = (files) => {
        setFiles(files);
    }
    const onChangeDes = (editorState) => {
        setEditorState(editorState)
        setDescription(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    }
    return (
        <div className="container" >
            <div className="tm-bg-primary-dark tm-block tm-block-h-auto">
                <div className="row">
                    <span className="close-modal" onClick={handleClose}>
                        <i className="fas fa-times"></i>
                    </span>
                    <div className="col-12" >
                        <h2 className="tm-block-title d-inline-block">Th??m s???n ph???m</h2>
                    </div>
                </div>
                <div className="row tm-edit-product-row">
                    <div className="col-xl-12 col-lg-12 col-md-12">
                        <form onSubmit={handleSubmit(onSubmit)} className="tm-edit-product-form">
                            <div className="row">
                                <div className="col-xl-6">
                                    <div className="form-group mb-3">
                                        <label
                                        >T??n S??ch
                                        </label>
                                        <input
                                            id="name"
                                            {...register("title", { required: true })}
                                            type="text"
                                            className="form-control"
                                        />
                                        {errors.title && <span style={{ color: 'red' }}>Vui l??ng nh???p t??n s??ch</span>}
                                    </div>
                                    <div className="form-group mb-3">
                                        <label
                                        >T??n T??c Gi???
                                        </label>
                                        <input
                                            id="name"
                                            type="text"
                                            className="form-control"
                                            {...register("author", { required: true })}
                                        />
                                        {errors.author && <span style={{ color: 'red' }}>Vui l??ng nh???p t??n t??c gi???</span>}
                                    </div>
                                    <div className="form-group mb-3 h-300">
                                        <label
                                        >Gi???i thi???u</label>
                                        <Editor
                                            editorState={editorState}
                                            onEditorStateChange={onChangeDes}
                                            editorClassName='editorClassName'
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Th??? lo???i</label>
                                        <select
                                            {...register("types")}
                                            className="custom-select"
                                            defaultValue={types[0]._id}
                                        >
                                            {types.map((type) => {
                                                return (
                                                    <option key={type._id} value={type._id}>{type.name}</option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label
                                        >Nh?? xu???t b???n
                                        </label>
                                        <select
                                            {...register("publicCompany")}
                                            className="custom-select"
                                            defaultValue={nxb[0]._id}
                                        >
                                            {nxb.map(n => {
                                                return (
                                                    <option
                                                        key={n._id}
                                                        value={n._id}
                                                    >{n.name}</option>
                                                )
                                            })}
                                        </select>
                                    </div>

                                </div>
                                <div className="col-xl-6">
                                    <div className="row">
                                        <div className="form-group mb-3 col-xs-12 col-sm-6">
                                            <label
                                            >S??? trang
                                            </label>
                                            <input
                                                id="expire_date"
                                                type="number"
                                                className="form-control"
                                                {...register('pages', { required: true, min: 0 })}
                                            />
                                            {errors.pages && <span style={{ color: 'red' }}>Vui l??ng nh???p s??? trang</span>}
                                        </div>
                                        <div className="form-group mb-3 col-xs-12 col-sm-6">
                                            <label
                                            >N??m xu???t b???n
                                            </label>
                                            <input
                                                id="expire_date"
                                                type="number"
                                                className="form-control"
                                                {...register('publicYear', { required: true, min: 0 })}
                                            />
                                            {errors.publicYear && <span style={{ color: 'red' }}>Vui l??ng nh???p n??m xu???t b???n</span>}
                                        </div>
                                        <div className="form-group mb-3 col-xs-12 col-sm-6">
                                            <label
                                            >S??? l?????ng
                                            </label>
                                            <input
                                                id="stock"
                                                type="number"
                                                className="form-control"
                                                {...register('inStock', { required: true, min: 0 })}
                                            />
                                            {errors.inStock && <span style={{ color: 'red' }}>Vui l??ng nh???p s??? l?????ng</span>}
                                        </div>
                                        <div className="form-group mb-3 col-xs-12 col-sm-6">
                                            <label>Gi??</label>
                                            <input
                                                id="expire_date"
                                                type="number"
                                                className="form-control"
                                                {...register('price', { min: 0, required: true })}
                                            />
                                            {errors.price && <span style={{ color: 'red' }}>Vui l??ng nh???p gi?? s???n ph???m</span>}
                                        </div>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label
                                        >Gi???m gi?? (kh??ng b???t bu???c) (%)
                                        </label>
                                        <input
                                            id="sale"
                                            type="text"
                                            className="form-control"
                                            {...register("sale")}
                                        />
                                    </div>
                                    <div className="row">
                                        <h5 className="text-center d-block pl-1 px-3">H??nh ???nh</h5>
                                        <Upload
                                            rsForm={rsForm}
                                            onSubmitImage={onSubmitImage}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block text-uppercase">
                                {loadingBtn ? <Spinners /> : ''}
                                Th??m s???n ph???m
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddProduct;