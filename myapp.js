<script>
document.getElementById('drop_area').addEventListener('dragover', function () {
    event.preventDefault();
    this.style.backgroundColor = '#80ff80';
});
document.getElementById('drop_area').addEventListener('dragleave', function () {
    this.style.backgroundColor = '';
});
document.getElementById('drop_area').addEventListener('drop', function () {
    event.preventDefault();
this.style.backgroundColor = '';
    if (event.dataTransfer.files.length > 0) {
    document.getElementById('userfile').files =event.dataTransfer.files;
    document.getElementById('userfile').dispatchEvent(new Event('change'));
}
});
document.getElementById('userfile').addEventListener('change', function () {
    document.getElementById('file_info').innerHTML = 
    'ファイル名:'+this.files[0].name+'<br>'+
    'タイプ:'+this.files[0].type+'<br>'+
    'サイズ:'+this.files[0].size+'<br>'+
    '更新日:'+this.files[0].lastModifiedDate+'<br>';
});
</script>