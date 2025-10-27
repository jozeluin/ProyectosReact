


const App = () => {
  
 
  return (
   <div>
    <div  id="editorWrap" >
      <textarea className="d-block"  id="editor" type="text" resize="vertical" rows="20" cols="50"></textarea>
    </div>
    <div id="markdownPreview">
      <textarea className="d-block" id="editor" type="text" resize="vertical" rows="20" cols="50"></textarea>
    </div>
  </div>
   
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

