namespace eBookManager
{
    partial class ImportBooks
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            btnSelectSourceFolder = new Button();
            tvFoundBooks = new TreeView();
            grpbxVirtualStorageSpace = new GroupBox();
            dlVirtualStorageSpaces = new ComboBox();
            btnAddNewStorageSpace = new Button();
            txtStorageSpaceName = new TextBox();
            button2btnSaveNewStorageSpace = new Button();
            btnCancel = new Button();
            lblBookCount = new Label();
            lblStorageSpaceDescription = new Label();
            textBox2 = new TextBox();
            groupBox1 = new GroupBox();
            groupBox2 = new GroupBox();
            grpbxVirtualStorageSpace.SuspendLayout();
            SuspendLayout();
            // 
            // btnSelectSourceFolder
            // 
            btnSelectSourceFolder.Location = new Point(12, 12);
            btnSelectSourceFolder.Name = "btnSelectSourceFolder";
            btnSelectSourceFolder.Size = new Size(149, 23);
            btnSelectSourceFolder.TabIndex = 0;
            btnSelectSourceFolder.Text = "Select Source Folder";
            btnSelectSourceFolder.UseVisualStyleBackColor = true;
            // 
            // tvFoundBooks
            // 
            tvFoundBooks.Location = new Point(12, 41);
            tvFoundBooks.Name = "tvFoundBooks";
            tvFoundBooks.Size = new Size(688, 393);
            tvFoundBooks.TabIndex = 1;
            // 
            // grpbxVirtualStorageSpace
            // 
            grpbxVirtualStorageSpace.Controls.Add(textBox2);
            grpbxVirtualStorageSpace.Controls.Add(lblStorageSpaceDescription);
            grpbxVirtualStorageSpace.Controls.Add(lblBookCount);
            grpbxVirtualStorageSpace.Controls.Add(btnCancel);
            grpbxVirtualStorageSpace.Controls.Add(button2btnSaveNewStorageSpace);
            grpbxVirtualStorageSpace.Controls.Add(txtStorageSpaceName);
            grpbxVirtualStorageSpace.Controls.Add(btnAddNewStorageSpace);
            grpbxVirtualStorageSpace.Controls.Add(dlVirtualStorageSpaces);
            grpbxVirtualStorageSpace.Location = new Point(18, 450);
            grpbxVirtualStorageSpace.Name = "grpbxVirtualStorageSpace";
            grpbxVirtualStorageSpace.Size = new Size(682, 215);
            grpbxVirtualStorageSpace.TabIndex = 2;
            grpbxVirtualStorageSpace.TabStop = false;
            grpbxVirtualStorageSpace.Text = "Virtual Storage Spaces";
            // 
            // dlVirtualStorageSpaces
            // 
            dlVirtualStorageSpaces.FormattingEnabled = true;
            dlVirtualStorageSpaces.Location = new Point(12, 19);
            dlVirtualStorageSpaces.Name = "dlVirtualStorageSpaces";
            dlVirtualStorageSpaces.Size = new Size(198, 23);
            dlVirtualStorageSpaces.TabIndex = 0;
            // 
            // btnAddNewStorageSpace
            // 
            btnAddNewStorageSpace.Location = new Point(216, 18);
            btnAddNewStorageSpace.Name = "btnAddNewStorageSpace";
            btnAddNewStorageSpace.Size = new Size(50, 23);
            btnAddNewStorageSpace.TabIndex = 1;
            btnAddNewStorageSpace.Text = "Add";
            btnAddNewStorageSpace.UseVisualStyleBackColor = true;
            // 
            // txtStorageSpaceName
            // 
            txtStorageSpaceName.Location = new Point(272, 19);
            txtStorageSpaceName.Name = "txtStorageSpaceName";
            txtStorageSpaceName.Size = new Size(237, 23);
            txtStorageSpaceName.TabIndex = 2;
            // 
            // button2btnSaveNewStorageSpace
            // 
            button2btnSaveNewStorageSpace.Location = new Point(515, 18);
            button2btnSaveNewStorageSpace.Name = "button2btnSaveNewStorageSpace";
            button2btnSaveNewStorageSpace.Size = new Size(74, 23);
            button2btnSaveNewStorageSpace.TabIndex = 3;
            button2btnSaveNewStorageSpace.Text = "Save";
            button2btnSaveNewStorageSpace.UseVisualStyleBackColor = true;
            // 
            // btnCancel
            // 
            btnCancel.Location = new Point(595, 18);
            btnCancel.Name = "btnCancel";
            btnCancel.Size = new Size(64, 23);
            btnCancel.TabIndex = 3;
            btnCancel.Text = "Cancel";
            btnCancel.UseVisualStyleBackColor = true;
            // 
            // lblBookCount
            // 
            lblBookCount.AutoSize = true;
            lblBookCount.Location = new Point(12, 56);
            lblBookCount.Name = "lblBookCount";
            lblBookCount.Size = new Size(80, 15);
            lblBookCount.TabIndex = 4;
            lblBookCount.Text = "lblBookCount";
            // 
            // lblStorageSpaceDescription
            // 
            lblStorageSpaceDescription.AutoSize = true;
            lblStorageSpaceDescription.Location = new Point(277, 52);
            lblStorageSpaceDescription.Name = "lblStorageSpaceDescription";
            lblStorageSpaceDescription.Size = new Size(144, 15);
            lblStorageSpaceDescription.TabIndex = 5;
            lblStorageSpaceDescription.Text = "Storage Space Description";
            // 
            // textBox2
            // 
            textBox2.Enabled = false;
            textBox2.Location = new Point(277, 70);
            textBox2.Multiline = true;
            textBox2.Name = "textBox2";
            textBox2.Size = new Size(382, 125);
            textBox2.TabIndex = 6;
            // 
            // groupBox1
            // 
            groupBox1.Location = new Point(715, 40);
            groupBox1.Name = "groupBox1";
            groupBox1.Size = new Size(366, 280);
            groupBox1.TabIndex = 3;
            groupBox1.TabStop = false;
            groupBox1.Text = "File Details";
            // 
            // groupBox2
            // 
            groupBox2.Location = new Point(715, 337);
            groupBox2.Name = "groupBox2";
            groupBox2.Size = new Size(366, 280);
            groupBox2.TabIndex = 3;
            groupBox2.TabStop = false;
            groupBox2.Text = "Book Details";
            // 
            // ImportBooks
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(1093, 677);
            Controls.Add(groupBox2);
            Controls.Add(groupBox1);
            Controls.Add(grpbxVirtualStorageSpace);
            Controls.Add(tvFoundBooks);
            Controls.Add(btnSelectSourceFolder);
            Name = "ImportBooks";
            Text = "ImportBooks";
            grpbxVirtualStorageSpace.ResumeLayout(false);
            grpbxVirtualStorageSpace.PerformLayout();
            ResumeLayout(false);
        }

        #endregion

        private Button btnSelectSourceFolder;
        private TreeView tvFoundBooks;
        private GroupBox grpbxVirtualStorageSpace;
        private TextBox textBox2;
        private Label lblStorageSpaceDescription;
        private Label lblBookCount;
        private Button btnCancel;
        private Button button2btnSaveNewStorageSpace;
        private TextBox txtStorageSpaceName;
        private Button btnAddNewStorageSpace;
        private ComboBox dlVirtualStorageSpaces;
        private GroupBox groupBox1;
        private GroupBox groupBox2;
    }
}