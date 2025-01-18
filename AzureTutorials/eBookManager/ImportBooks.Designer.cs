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
            textBox2 = new TextBox();
            lblStorageSpaceDescription = new Label();
            lblEbookCount = new Label();
            btnCancel = new Button();
            button2btnSaveNewStorageSpace = new Button();
            txtStorageSpaceName = new TextBox();
            btnAddNewStorageSpace = new Button();
            dlVirtualStorageSpaces = new ComboBox();
            groupBox1 = new GroupBox();
            dtLastAccessed = new DateTimePicker();
            dtCreated = new DateTimePicker();
            txtFileSize = new TextBox();
            label6 = new Label();
            txtFilePath = new TextBox();
            label5 = new Label();
            label4 = new Label();
            label3 = new Label();
            txtExtension = new TextBox();
            label2 = new Label();
            txtFileName = new TextBox();
            label1 = new Label();
            groupBox2 = new GroupBox();
            btnAddBookToStorageSpace = new Button();
            dateTimePicker3 = new DateTimePicker();
            textBox16 = new TextBox();
            label15 = new Label();
            textBox15 = new TextBox();
            label14 = new Label();
            label13 = new Label();
            textBox13 = new TextBox();
            label12 = new Label();
            textBox12 = new TextBox();
            label11 = new Label();
            textBox11 = new TextBox();
            label10 = new Label();
            textBox10 = new TextBox();
            label9 = new Label();
            textBox9 = new TextBox();
            label8 = new Label();
            grpbxVirtualStorageSpace.SuspendLayout();
            groupBox1.SuspendLayout();
            groupBox2.SuspendLayout();
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
            btnSelectSourceFolder.Click += btnSelectSourceFolder_Click;
            // 
            // tvFoundBooks
            // 
            tvFoundBooks.Location = new Point(12, 41);
            tvFoundBooks.Name = "tvFoundBooks";
            tvFoundBooks.Size = new Size(688, 393);
            tvFoundBooks.TabIndex = 1;
            tvFoundBooks.AfterSelect += tvFoundBooks_AfterSelect;
            // 
            // grpbxVirtualStorageSpace
            // 
            grpbxVirtualStorageSpace.Controls.Add(textBox2);
            grpbxVirtualStorageSpace.Controls.Add(lblStorageSpaceDescription);
            grpbxVirtualStorageSpace.Controls.Add(lblEbookCount);
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
            // textBox2
            // 
            textBox2.Enabled = false;
            textBox2.Location = new Point(277, 70);
            textBox2.Multiline = true;
            textBox2.Name = "textBox2";
            textBox2.Size = new Size(382, 125);
            textBox2.TabIndex = 6;
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
            // lblEbookCount
            // 
            lblEbookCount.AutoSize = true;
            lblEbookCount.Location = new Point(12, 56);
            lblEbookCount.Name = "lblEbookCount";
            lblEbookCount.Size = new Size(86, 15);
            lblEbookCount.TabIndex = 4;
            lblEbookCount.Text = "lblEbookCount";
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
            // button2btnSaveNewStorageSpace
            // 
            button2btnSaveNewStorageSpace.Location = new Point(515, 18);
            button2btnSaveNewStorageSpace.Name = "button2btnSaveNewStorageSpace";
            button2btnSaveNewStorageSpace.Size = new Size(74, 23);
            button2btnSaveNewStorageSpace.TabIndex = 3;
            button2btnSaveNewStorageSpace.Text = "Save";
            button2btnSaveNewStorageSpace.UseVisualStyleBackColor = true;
            // 
            // txtStorageSpaceName
            // 
            txtStorageSpaceName.Location = new Point(272, 19);
            txtStorageSpaceName.Name = "txtStorageSpaceName";
            txtStorageSpaceName.Size = new Size(237, 23);
            txtStorageSpaceName.TabIndex = 2;
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
            // dlVirtualStorageSpaces
            // 
            dlVirtualStorageSpaces.FormattingEnabled = true;
            dlVirtualStorageSpaces.Location = new Point(12, 19);
            dlVirtualStorageSpaces.Name = "dlVirtualStorageSpaces";
            dlVirtualStorageSpaces.Size = new Size(198, 23);
            dlVirtualStorageSpaces.TabIndex = 0;
            // 
            // groupBox1
            // 
            groupBox1.Controls.Add(dtLastAccessed);
            groupBox1.Controls.Add(dtCreated);
            groupBox1.Controls.Add(txtFileSize);
            groupBox1.Controls.Add(label6);
            groupBox1.Controls.Add(txtFilePath);
            groupBox1.Controls.Add(label5);
            groupBox1.Controls.Add(label4);
            groupBox1.Controls.Add(label3);
            groupBox1.Controls.Add(txtExtension);
            groupBox1.Controls.Add(label2);
            groupBox1.Controls.Add(txtFileName);
            groupBox1.Controls.Add(label1);
            groupBox1.Location = new Point(715, 40);
            groupBox1.Name = "groupBox1";
            groupBox1.Size = new Size(366, 210);
            groupBox1.TabIndex = 3;
            groupBox1.TabStop = false;
            groupBox1.Text = "File Details";
            // 
            // dtLastAccessed
            // 
            dtLastAccessed.Location = new Point(106, 105);
            dtLastAccessed.Name = "dtLastAccessed";
            dtLastAccessed.Size = new Size(254, 23);
            dtLastAccessed.TabIndex = 2;
            // 
            // dtCreated
            // 
            dtCreated.Location = new Point(106, 77);
            dtCreated.Name = "dtCreated";
            dtCreated.Size = new Size(254, 23);
            dtCreated.TabIndex = 2;
            // 
            // txtFileSize
            // 
            txtFileSize.Location = new Point(106, 164);
            txtFileSize.Name = "txtFileSize";
            txtFileSize.Size = new Size(254, 23);
            txtFileSize.TabIndex = 1;
            // 
            // label6
            // 
            label6.AutoSize = true;
            label6.Location = new Point(11, 167);
            label6.Name = "label6";
            label6.Size = new Size(30, 15);
            label6.TabIndex = 0;
            label6.Text = "Size:";
            // 
            // txtFilePath
            // 
            txtFilePath.Location = new Point(106, 135);
            txtFilePath.Name = "txtFilePath";
            txtFilePath.Size = new Size(254, 23);
            txtFilePath.TabIndex = 1;
            // 
            // label5
            // 
            label5.AutoSize = true;
            label5.Location = new Point(11, 138);
            label5.Name = "label5";
            label5.Size = new Size(55, 15);
            label5.TabIndex = 0;
            label5.Text = "File Path:";
            // 
            // label4
            // 
            label4.AutoSize = true;
            label4.Location = new Point(11, 109);
            label4.Name = "label4";
            label4.Size = new Size(51, 15);
            label4.TabIndex = 0;
            label4.Text = "Created:";
            // 
            // label3
            // 
            label3.AutoSize = true;
            label3.Location = new Point(11, 80);
            label3.Name = "label3";
            label3.Size = new Size(78, 15);
            label3.TabIndex = 0;
            label3.Text = "Last Accesed:";
            // 
            // txtExtension
            // 
            txtExtension.Location = new Point(106, 48);
            txtExtension.Name = "txtExtension";
            txtExtension.Size = new Size(254, 23);
            txtExtension.TabIndex = 1;
            // 
            // label2
            // 
            label2.AutoSize = true;
            label2.Location = new Point(11, 51);
            label2.Name = "label2";
            label2.Size = new Size(82, 15);
            label2.TabIndex = 0;
            label2.Text = "File Extension:";
            // 
            // txtFileName
            // 
            txtFileName.Location = new Point(106, 19);
            txtFileName.Name = "txtFileName";
            txtFileName.Size = new Size(254, 23);
            txtFileName.TabIndex = 1;
            // 
            // label1
            // 
            label1.AutoSize = true;
            label1.Location = new Point(11, 22);
            label1.Name = "label1";
            label1.Size = new Size(63, 15);
            label1.TabIndex = 0;
            label1.Text = "File Name:";
            // 
            // groupBox2
            // 
            groupBox2.Controls.Add(btnAddBookToStorageSpace);
            groupBox2.Controls.Add(dateTimePicker3);
            groupBox2.Controls.Add(textBox16);
            groupBox2.Controls.Add(label15);
            groupBox2.Controls.Add(textBox15);
            groupBox2.Controls.Add(label14);
            groupBox2.Controls.Add(label13);
            groupBox2.Controls.Add(textBox13);
            groupBox2.Controls.Add(label12);
            groupBox2.Controls.Add(textBox12);
            groupBox2.Controls.Add(label11);
            groupBox2.Controls.Add(textBox11);
            groupBox2.Controls.Add(label10);
            groupBox2.Controls.Add(textBox10);
            groupBox2.Controls.Add(label9);
            groupBox2.Controls.Add(textBox9);
            groupBox2.Controls.Add(label8);
            groupBox2.Location = new Point(715, 269);
            groupBox2.Name = "groupBox2";
            groupBox2.Size = new Size(366, 348);
            groupBox2.TabIndex = 3;
            groupBox2.TabStop = false;
            groupBox2.Text = "Book Details";
            // 
            // btnAddBookToStorageSpace
            // 
            btnAddBookToStorageSpace.Location = new Point(14, 261);
            btnAddBookToStorageSpace.Name = "btnAddBookToStorageSpace";
            btnAddBookToStorageSpace.Size = new Size(75, 23);
            btnAddBookToStorageSpace.TabIndex = 3;
            btnAddBookToStorageSpace.Text = "Add Book";
            btnAddBookToStorageSpace.UseVisualStyleBackColor = true;
            // 
            // dateTimePicker3
            // 
            dateTimePicker3.Location = new Point(106, 167);
            dateTimePicker3.Name = "dateTimePicker3";
            dateTimePicker3.Size = new Size(254, 23);
            dateTimePicker3.TabIndex = 2;
            // 
            // textBox16
            // 
            textBox16.Location = new Point(106, 225);
            textBox16.Name = "textBox16";
            textBox16.Size = new Size(254, 23);
            textBox16.TabIndex = 1;
            // 
            // label15
            // 
            label15.AutoSize = true;
            label15.Location = new Point(11, 228);
            label15.Name = "label15";
            label15.Size = new Size(80, 15);
            label15.TabIndex = 0;
            label15.Text = "Classification:";
            // 
            // textBox15
            // 
            textBox15.Location = new Point(106, 196);
            textBox15.Name = "textBox15";
            textBox15.Size = new Size(254, 23);
            textBox15.TabIndex = 1;
            // 
            // label14
            // 
            label14.AutoSize = true;
            label14.Location = new Point(11, 199);
            label14.Name = "label14";
            label14.Size = new Size(58, 15);
            label14.TabIndex = 0;
            label14.Text = "Category:";
            // 
            // label13
            // 
            label13.AutoSize = true;
            label13.Location = new Point(11, 170);
            label13.Name = "label13";
            label13.Size = new Size(89, 15);
            label13.TabIndex = 0;
            label13.Text = "Date Published:";
            // 
            // textBox13
            // 
            textBox13.Location = new Point(106, 138);
            textBox13.Name = "textBox13";
            textBox13.Size = new Size(254, 23);
            textBox13.TabIndex = 1;
            // 
            // label12
            // 
            label12.AutoSize = true;
            label12.Location = new Point(11, 141);
            label12.Name = "label12";
            label12.Size = new Size(35, 15);
            label12.TabIndex = 0;
            label12.Text = "ISBN:";
            // 
            // textBox12
            // 
            textBox12.Location = new Point(106, 109);
            textBox12.Name = "textBox12";
            textBox12.Size = new Size(254, 23);
            textBox12.TabIndex = 1;
            // 
            // label11
            // 
            label11.AutoSize = true;
            label11.Location = new Point(11, 112);
            label11.Name = "label11";
            label11.Size = new Size(36, 15);
            label11.TabIndex = 0;
            label11.Text = "Price:";
            // 
            // textBox11
            // 
            textBox11.Location = new Point(106, 80);
            textBox11.Name = "textBox11";
            textBox11.Size = new Size(254, 23);
            textBox11.TabIndex = 1;
            // 
            // label10
            // 
            label10.AutoSize = true;
            label10.Location = new Point(11, 83);
            label10.Name = "label10";
            label10.Size = new Size(59, 15);
            label10.TabIndex = 0;
            label10.Text = "Publisher:";
            // 
            // textBox10
            // 
            textBox10.Location = new Point(106, 51);
            textBox10.Name = "textBox10";
            textBox10.Size = new Size(254, 23);
            textBox10.TabIndex = 1;
            // 
            // label9
            // 
            label9.AutoSize = true;
            label9.Location = new Point(11, 54);
            label9.Name = "label9";
            label9.Size = new Size(47, 15);
            label9.TabIndex = 0;
            label9.Text = "Author:";
            // 
            // textBox9
            // 
            textBox9.Location = new Point(106, 22);
            textBox9.Name = "textBox9";
            textBox9.Size = new Size(254, 23);
            textBox9.TabIndex = 1;
            // 
            // label8
            // 
            label8.AutoSize = true;
            label8.Location = new Point(11, 25);
            label8.Name = "label8";
            label8.Size = new Size(32, 15);
            label8.TabIndex = 0;
            label8.Text = "Title:";
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
            Load += ImportBooks_Load;
            grpbxVirtualStorageSpace.ResumeLayout(false);
            grpbxVirtualStorageSpace.PerformLayout();
            groupBox1.ResumeLayout(false);
            groupBox1.PerformLayout();
            groupBox2.ResumeLayout(false);
            groupBox2.PerformLayout();
            ResumeLayout(false);
        }

        #endregion

        private Button btnSelectSourceFolder;
        private TreeView tvFoundBooks;
        private GroupBox grpbxVirtualStorageSpace;
        private TextBox textBox2;
        private Label lblStorageSpaceDescription;
        private Label lblEbookCount;
        private Button btnCancel;
        private Button button2btnSaveNewStorageSpace;
        private TextBox txtStorageSpaceName;
        private Button btnAddNewStorageSpace;
        private ComboBox dlVirtualStorageSpaces;
        private GroupBox groupBox1;
        private GroupBox groupBox2;
        private TextBox txtFileSize;
        private Label label6;
        private TextBox txtFilePath;
        private Label label5;
        private Label label4;
        private Label label3;
        private TextBox txtExtension;
        private Label label2;
        private TextBox txtFileName;
        private Label label1;
        private TextBox textBox16;
        private Label label15;
        private TextBox textBox15;
        private Label label14;
        private Label label13;
        private TextBox textBox13;
        private Label label12;
        private TextBox textBox12;
        private Label label11;
        private TextBox textBox11;
        private Label label10;
        private TextBox textBox10;
        private Label label9;
        private TextBox textBox9;
        private Label label8;
        private DateTimePicker dtLastAccessed;
        private DateTimePicker dtCreated;
        private DateTimePicker dateTimePicker3;
        private Button btnAddBookToStorageSpace;
    }
}