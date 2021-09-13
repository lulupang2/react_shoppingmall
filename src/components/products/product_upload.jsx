import React, { useEffect, useRef, useState, Component } from 'react'
import jQuery from 'jquery';
import $ from 'jquery';
import './products.css'
// const ProductUpload = () => {
//     const [file, setFile] = useState('');
//     const [previewURL, setPreviewURL] = useState('');
//     const [preview, setPreview] = useState(null);
//     const fileRef = useRef();
//     useEffect(() => {
//         if (file !== '') //처음 파일 등록하지 않았을 때를 방지
//             setPreview(<img className='img_preview' src={previewURL}></img>);
//         return () => {
//         }
//     }, [previewURL])

//     const fileBtn = (e) => {
//         e.preventDefault(); //이벤트를 취소할 수 있는 경우, 이벤트의 전파를 막지않고 그 이벤트를 취소합니다. 몰?루
//         let file = e.target.files[0];
//         let reader = new FileReader(); // 업로드한 파일 읽는 객체
//         reader.onloadend = (e) => {
//             setFile(file);
//             setPreviewURL(reader.result);
//         }
//         if (file)
//             reader.readAsDataURL(file);
//     }

//     const handleFileButtonClick = (e) => {//버튼 대신 클릭하기
//         e.preventDefault();
//         fileRef.current.click(); // file 불러오는 버튼을 대신 클릭함
//     }

const ProductUpload = () => {
    useEffect(() => {

        $(document).ready(function () {
            var fileTarget = $('#p_img');

            fileTarget.on('change', function () {
                if (window.FileReader) {
                    var filename = $(this)[0].files[0].name;
                } else {
                    var filename = $(this).val().split('/').pop().split('\\').pop();
                }

                $(this).siblings('.file_upload').val(filename);
            });
        });

    }, [])





    return (
        <div className="ProductUpload">
            <form>
                <div className="p_container">
                    <h1>상품등록펭지</h1>
                <div className="col_input">
                        <span className="input_text">
                            상품명
                        </span>

                    <input type="text" name="p_name" id="p_name" className="p_name" />

                </div>
                <div className="col_input">
                        <span className="input_text">
                            제조사
                        </span>

                    <input type="text" name="p_manu" id="p_manu" className="p_manu" />

                </div>
                <div className="col_input">
                        <span className="input_text">
                            가격
                        </span>

                    <input type="text" name="p_price" id="p_price" className="p_price" />

                </div>
                <div className="col_input">
                        <span className="input_text">
                            현재수량
                        </span>
                    <input type="text" name="p_manu" id="p_manu" className="p_manu" />
                </div>
                <div className="col_input">
                    <label for="p_kind">
                        <span className="input_text">
                            종류
                        </span>
                    </label>

                    <select name="p_kind" id="p_kind">
                        <option>반려견</option>
                        <option>반려묘</option>
                        <option>기타동물</option>
                        <option>기타</option>
                    </select>
                </div>
                <div className="col_input">
                        <span className="input_text">
                            서브타이틀
                        </span>

                    <input type="text" name="p_subtitle" id="p_subtitle" className="p_subtitle" />
                </div>
                <div className="col_input">
                        <span className="input_text">
                            상세설명
                        </span>

                    <textarea name="p_detail" id="p_detail" placeholder="보통 API당겨쓰지않나"></textarea>
                </div>

                <div className="col_input">
                        <span className="input_text">
                            상품이미지
                        </span>
                    <input type="text" className="file_upload" id="file_upload" disabled="disabled" placeholder="가능하면 png 파일로 해주세요" />
                    <input type="file" name="p_img" id="p_img" className="p_img" />
                    <label for="p_img" className="fileadd_btn">파일 추가</label>

                </div>
                
                {/* 
                <div className="col_input">
                <label for="p_file2">
                    <aside className="side">
                        <input ref={fileRef} hidden={true} id="file" type='file' onChange={fileBtn}></input>
                        <header className="side-header">
                            <span align="center" variant="overline" display="block" gutterBottom>
                                Title text
                            </span>
                        </header>
                        <div style={{ padding: 10 }}>
                            <button onClick={handleFileButtonClick}>UPLOAD</button>
                        </div>
                    </aside>
                    {preview}
                </label> */}
                    <div className="col_input">
                        <button type="submit" className="submitBtn">전송</button>
</div>
</div>
            </form>

        </div>
    )
}

export default ProductUpload
